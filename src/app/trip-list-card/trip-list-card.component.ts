import { Component, OnInit, Input } from '@angular/core';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-list-card',
  templateUrl: './trip-list-card.component.html',
  styleUrls: ['./trip-list-card.component.css']
})
export class TripListCardComponent implements OnInit {

  @Input() trip: Trip;
  hoverClass = '';

  constructor() { }

  ngOnInit() {
  }

  changeStyle($event) {
    this.hoverClass = $event.type === 'mouseover' ? 'bg-light' : '';
  }

}
