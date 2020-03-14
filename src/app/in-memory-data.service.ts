import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Trip } from './interfaces/trip';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const trips = [
      { id: 11, name: 'Warszawa', startDate: '2020-09-30', endDate: '2020-10-29' },
      { id: 12, name: 'Lizbona', startDate: '2020-09-30', endDate: '2020-10-29' },
      { id: 13, name: 'Londyn', startDate: '2020-09-30', endDate: '2020-10-29' },
      { id: 14, name: 'Rzym', startDate: '2020-09-30', endDate: '2020-10-29' },
      { id: 15, name: 'Berlin', startDate: '2020-09-30', endDate: '2020-10-29' },
      { id: 16, name: 'Praga', startDate: '2020-09-30', endDate: '2020-10-29' },
      { id: 17, name: 'Bratysława', startDate: '2020-09-30', endDate: '2020-10-29' },
      { id: 18, name: 'Zagrzeb', startDate: '2020-09-30', endDate: '2020-10-29' },
      { id: 19, name: 'Sydney', startDate: '2020-09-30', endDate: '2020-10-29' },
      { id: 20, name: 'Toronto', startDate: '2020-09-30', endDate: '2020-10-29' }
    ];
    return {trips};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(trips: Trip[]): number {
    return trips.length > 0 ? Math.max(...trips.map(hero => hero.id)) + 1 : 11;
  }
}