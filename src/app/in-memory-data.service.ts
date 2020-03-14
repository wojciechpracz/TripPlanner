import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Trip } from './models/trip';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const trips = [
      { id: 11, title: 'Warsaw', startDate: '2020-09-30',
        endDate: '2020-10-29', formOfTransport: 'bus', description: 'Amazing adventure'},
      { id: 12, title: 'Lisbon', startDate: '2020-09-30',
        endDate: '2020-10-29', formOfTransport: 'plane', description: 'Amazing adventure' },
      { id: 13, title: 'London', startDate: '2020-09-30',
        endDate: '2020-10-29', formOfTransport: 'car', description: 'Amazing adventure' },
      { id: 14, title: 'Rome', startDate: '2020-09-30',
        endDate: '2020-10-29', formOfTransport: 'train', description: 'Amazing adventure' },
      { id: 15, title: 'Berlin', startDate: '2020-09-30',
        endDate: '2020-10-29', formOfTransport: 'car', description: 'Amazing adventure'  },
      { id: 16, title: 'Prague', startDate: '2020-09-30',
        endDate: '2020-10-29', formOfTransport: 'car', description: 'Amazing adventure'  },
      { id: 17, title: 'Bratislava', startDate: '2020-09-30',
        endDate: '2020-10-29', formOfTransport: 'car', description: 'Amazing adventure'  },
      { id: 18, title: 'Zagreb', startDate: '2020-09-30',
        endDate: '2020-10-29', formOfTransport: 'car', description: 'Amazing adventure'  },
      { id: 19, title: 'Sydney', startDate: '2020-09-30',
        endDate: '2020-10-29', formOfTransport: 'car', description: 'Amazing adventure'  },
      { id: 20, title: 'Toronto', startDate: '2020-09-30',
        endDate: '2020-10-29', formOfTransport: 'car', description: 'Amazing adventure'  }
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
