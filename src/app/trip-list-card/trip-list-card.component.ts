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
  imgSrc = '';

  constructor() { }

  ngOnInit() {
    this.imgSrc = 'assets/images/' + ((Math.round((Math.random() * 10)) % 9) + 1) + '.jpg';
    console.log(this.imgSrc);
  }

  changeStyle($event) {
    this.hoverClass = $event.type === 'mouseover' ? 'bg-light' : '';
  }

}
