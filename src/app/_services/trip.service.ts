import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Trip } from '../models/trip';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  private tripsUrl = 'api/trips';

  constructor(private http: HttpClient) {}


  public getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.tripsUrl);
  }

  public getTrip(id): Observable<Trip> {
    return this.http.get<Trip>(this.tripsUrl + '/' + id);
  }

  public createTrip(trip): Observable<any> {
    return this.http.post(this.tripsUrl, trip, this.httpOptions);
  }
 }
