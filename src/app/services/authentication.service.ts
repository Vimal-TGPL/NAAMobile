import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from '../models/user';
import { environment } from '../../environments/environment';
//import { BnNgIdleService } from 'bn-ng-idle';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
}
