import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {
  }

  login(credentials: any) {
    //  it will return the status and token as a response
    return this.http.post('/api/authenticate', JSON.stringify(credentials)).pipe(
      map(response => {

        //  set the token in the local storage

        // let res = response;
        // if (res && res.token)
        //   localStorage['set']('token', res.token)
        // else
        //   return false
      })
    );
  }

  logout() {
    //  for logout, we have to delete the token from local storage
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }

  isLoggedIn() {

    // install JwtHelper according to angular version and then check for expiration
    // let jwt = new JwtHelper()
    let log = localStorage['getItem']('logged')
    return log;
  }

  get currentUser() {
    let token = localStorage['getItem']('token');
    if(!token) return null;

    //  return JwtHelper decoded part
    return { name: 'Monika Mittal', admin: true }
  }
}
