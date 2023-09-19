// import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  invalidLogin: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private ngForm: NgForm
  ) { }

  signIn() {
    // console.log
    let credentials = {
      email: 'mona@domain.com',
      password: 12345
    }
    // this.authService.login(credentials)
    //   .subscribe(result => {
    //     //  give the token as a response or get the boolean value and set it accordingly
    //     if (result)
    //       this.router.navigate(['/']);
    //     else
    //       this.invalidLogin = true;
    //   });

    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vbmlrYSBNaXR0YWwiLCJpYXQiOjE1MTYyMzkwMjIsImFkbWluIjp0cnVlfQ.ruk8K4tuIlQ5EIlX8Z6DC32pKCLHF5HjQ8meoSgeuHk';
    // let token = ''

    localStorage['setItem']('token', token);

    if (token) {
      this.router.navigate(['/']);
      localStorage['setItem']('logged', 'true');
    }
    else {
      localStorage['setItem']('logged', 'false');
      this.invalidLogin = true;
    }
      
  }
}
