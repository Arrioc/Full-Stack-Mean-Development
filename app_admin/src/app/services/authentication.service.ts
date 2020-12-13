import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from '../storage';
import { User } from '../models/user';
import { AuthResponse } from '../models/authresponse';
import { TripDataService } from '../services/trip-data.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(
        @Inject(BROWSER_STORAGE) private storage: Storage,
        private tripDataService: TripDataService
    ) { }
    
    // get token method
    public getToken(): string {
        return this.storage.getItem('travlr-token');
    }
    //  save token method
    public saveToken(token: string): void {
        this.storage.setItem('travlr-token', token);
    }
    // login method (defers to trip data service login)
    public login(user: User): Promise<any> {
        return this.tripDataService.login(user)                 // after login, take response and call save token (local)
            .then((authResp: AuthResponse) => this.saveToken(authResp.token));
    }
    // register login method
    public register(user: User): Promise<any> {
        return this.tripDataService.register(user)              // after login, take response and call save token (local)
            .then((authResp: AuthResponse) => this.saveToken(authResp.token));
    }
    // logout method
    public logout(): void {
        this.storage.removeItem('travlr-token');
    }
    // is logged in method
    public isLoggedIn(): boolean {
        const token: string = this.getToken();
        if (token) {
          const payload = JSON.parse(atob(token.split('.')[1]));
          return payload.exp > (Date.now() / 1000);
        } else {
          return false;
        }
    }
    // get current user method - returns name of the user that just logged in
    public getCurrentUser(): User {
        if (this.isLoggedIn()) {
            const token: string = this.getToken();
            const { email, name } = JSON.parse(atob(token.split('.')[1]));
            return { email, name } as User;
        }
    }
}