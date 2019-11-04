import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from '../models/user';
import { environment } from '../../environments/environment';
import { BnNgIdleService } from 'bn-ng-idle';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private api_url = environment.api_url;
  isTimerStarted: boolean = false;
  constructor(private http: HttpClient, private bnIdle: BnNgIdleService, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    let that = this;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>(this.api_url + `/users/authenticate`, { username, password }, httpOptions)
      .pipe(map(user => {
        // login successful if there's a jwt token in the response 
        if (user && user.token) {
          if (user.isEmailVerified != "" && user.isEmailVerified == "Y") {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            sessionStorage.setItem('currentUser', JSON.stringify(user));
            that.currentUserSubject.next(user);
            // console.log(that.currentUserValue)
            // that.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));
          }
        }
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    sessionStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    if (this.isTimerStarted) {
      this.bnIdle.stopTimer();
    }
    this.router.navigate(['/auth']);
  }

  startTimer() {
    if (this.isTimerStarted)
      this.bnIdle.stopTimer();

    this.isTimerStarted = true;
    this.bnIdle.startWatching(60).subscribe((isTimedOut: boolean) => {
      if (isTimedOut) {
        console.log('session expired');
        this.router.navigate(['/auth']);
      }
    });
  }

  resetTimer() {
    this.bnIdle.resetTimer();
  }
}
