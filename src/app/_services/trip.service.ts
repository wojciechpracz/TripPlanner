import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Trip } from '../models/trip';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient) {}

  private tripsUrl = 'api/trips';

  public getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.tripsUrl);
  }

  public getTrip(id): Observable<Trip> {
    return this.http.get<Trip>(this.tripsUrl + '/' + id);
  }

}
