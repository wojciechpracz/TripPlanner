import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trip } from '../interfaces/trip';
import { TripService } from '../_services/trip.service';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {
  trip: Trip;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tripService: TripService) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.tripService.getTrip(params.id).subscribe((data: Trip) => {
          this.trip = data;
        });
      }
    );
  }
}
