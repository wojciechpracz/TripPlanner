import { Component, OnInit } from '@angular/core';
import { TripService } from '../_services/trip.service';
import { Trip } from '../models/trip';


@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {

  trips: Trip[];

  constructor(private tripService: TripService) { }

  ngOnInit() {
    this.tripService.getTrips().subscribe((data: Trip[]) => {
      this.trips = data;
    });
    console.log(this.trips);
  }

}
