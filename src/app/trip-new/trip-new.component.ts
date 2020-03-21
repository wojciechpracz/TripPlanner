import { Component, OnInit } from '@angular/core';
import { Trip } from '../models/trip';
import { TripService } from '../_services/trip.service';

@Component({
  selector: 'app-trip-new',
  templateUrl: './trip-new.component.html',
  styleUrls: ['./trip-new.component.css']
})
export class TripNewComponent implements OnInit {

  constructor(private tripService: TripService) { }

  model: Trip = {
    title: '',
    dateAdded: null,
    startDate: null,
    endDate: null,
    formOfTransport: '',
    description: ''
  };

  selectedDateRange: {startDate: Date, endDate: Date};

  ngOnInit() {
  }

  createTrip() {
    this.model.startDate = this.selectedDateRange[0];
    this.model.endDate = this.selectedDateRange[1];
    this.model.dateAdded = new Date();

    this.tripService.createTrip(this.model);
  }
}
