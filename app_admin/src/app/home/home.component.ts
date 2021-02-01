import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service'; 

@Component({                         // home page which makes you log in before you can see listings
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }
}
