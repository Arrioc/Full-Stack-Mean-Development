import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user'; //in guide but never used

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public formError: string = '';            // present the login
  public credentials = {
    name: '',
    email: '',
    password: ''
  };

  constructor(
    private router: Router,                 // call auth logic
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {}
  
  // on submit function
  public onLoginSubmit(): void {
    this.formError = '';
    if (!this.credentials.email || !this.credentials.password) {    // makes sure email and pw arae filled in
      this.formError = 'All fields are required, please try again';
    } else {
      this.doLogin();                                               // then call 'do login'
    }
  }

  // 'do login' function
  private doLogin(): void {
    this.authenticationService.login(this.credentials)              // delegates to authentication service
      .then(() => this.router.navigateByUrl('#'))                   // navigate to homepage
      .catch((message) => this.formError = message);
  }
}