import { Component, OnInit, Input } from '@angular/core';
import { Trip } from '../models/trip';
import { Photo } from '../models/photo';

@Component({
  selector: 'app-trip-list-card',
  templateUrl: './trip-list-card.component.html',
  styleUrls: ['./trip-list-card.component.css']
})
export class TripListCardComponent implements OnInit {

  @Input() trip: Trip;
  hoverClass = '';
  mainPhotoUrl = '';

  constructor() { }

  ngOnInit() {
    const tripPhotos = this.trip.tripPhotos;
    if (tripPhotos && tripPhotos.length > 0) {
      const photo = tripPhotos.find(p => p.isMain === true);
      if (photo) {
        this.mainPhotoUrl = photo.url;
      }
    }
  }

  changeStyle($event) {
    this.hoverClass = $event.type === 'mouseover' ? 'bg-light' : '';
  }

}
