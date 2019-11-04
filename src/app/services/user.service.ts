import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api_url = environment.api_url;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(this.api_url + `/users`);
  }

  getById(id: number) {
    return this.http.get(this.api_url + `/users/${id}`);
  }

  register(user: User) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<string>(this.api_url + `/users/register`, user, httpOptions);
  }

  update(user: User) {
    return this.http.put(this.api_url + `/users/${user.Username}`, user);
  }

  delete(id: number) {
    return this.http.delete(this.api_url + `/users/${id}`);
  }
}
