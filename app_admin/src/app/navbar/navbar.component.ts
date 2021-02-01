import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() { }
  
  public isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  private onLogout(): void {
    this.authService.logout();  // If changing to vid way, remove 'return' on this lineand tab back
    this.router.navigateByUrl('#');        //VID HAS THIS BUT DOC DOESNT, WHO TO TURST?
    return;
  }
}