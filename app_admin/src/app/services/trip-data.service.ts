import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Trip } from '../models/trip';
import { User } from '../models/user';
import { AuthResponse } from '../models/authresponse';
import { BROWSER_STORAGE } from '../storage';


@Injectable()
export class TripDataService {

  constructor(
    private http: Http,                                       // recieving http module
    @Inject(BROWSER_STORAGE) private storage: Storage         // inject browser storage into variable usable within the class
    ) { }    
 
  private apiBaseUrl = 'http://localhost:3000/api/';
  private tripUrl = `${this.apiBaseUrl}trips/`;   // api plus trips

  // add trip method
  public addTrip(formData: Trip): Promise<Trip> {
    console.log('Inside TripDataService#addTrip');
    return this.http
      .post(this.tripUrl, formData)   // pass for data in request body
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }
  
  // get trips for the edit/update method
  public getTrip(tripCode: string): Promise<Trip> {
    console.log('Inside TripDataService#getTrip(tripCode)');
    return this.http
      .get(this.tripUrl + tripCode)
      .toPromise()
      .then(response => response.json() as Trip)
      .catch(this.handleError);
  }

  // get trip method
  public getTrips(): Promise<Trip[]> {              // return an array of trips by calling http get method
    console.log('Inside TripDataService#getTrips');
    return this.http
      .get(this.tripUrl)
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }

  // update trip method
  public updateTrip(formData: Trip): Promise<Trip> {
    console.log('Inside TripDataService#updateTrip');
    console.log(formData);
    return this.http
      .put(this.tripUrl + formData.code, formData)
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }

  // login method
  public login(user: User): Promise<AuthResponse> {
     return this.makeAuthApiCall('login', user);
  }

  // register method
  public register(user: User): Promise<AuthResponse> {
     return this.makeAuthApiCall('register', user);
  }
  
  // auth api call method
  private makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse> {
    const url: string = `${this.apiBaseUrl}/${urlPath}`;
    return this.http
      .post(url, user)                                    // make post to url with user class
      .toPromise()
      .then(response => response.json() as AuthResponse)  // response comes back mapped in as auth response
      .catch(this.handleError);
  }

}
