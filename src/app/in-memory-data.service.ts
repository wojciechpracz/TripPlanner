import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Trip } from './models/trip';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const date = new Date();
    const description1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at elementum libero. Quisque ornare odio quis velit rutrum, id pellentesque lorem consectetur. Vestibulum luctus ultricies pretium. In luctus ex a commodo vulputate. Etiam magna mauris, tristique vitae lectus in, dictum luctus leo. Nam vel rutrum ante, id posuere mi. Nullam fermentum turpis eu tellus cursus, et maximus tortor lacinia. Aliquam sed gravida risus.'
    const description2 =  'Pellentesque eget purus et tellus auctor efficitur. Ut aliquam, quam eget venenatis imperdiet, nisi quam rhoncus tellus, nec eleifend arcu lorem et orci. Fusce tellus turpis, cursus nec felis at, pulvinar blandit magna. Nullam sit amet tortor ornare, feugiat libero a, tristique ante. ' 
    
    const photos = [
      {id: 11, url: 'assets/images/1.jpg', description: 'photo 1', isMain: true, dateAdded: date},
      {id: 12, url: 'assets/images/2.jpg', description: 'photo 2', isMain: true, dateAdded: date},
      {id: 13, url: 'assets/images/3.jpg', description: 'photo 3', isMain: true, dateAdded: date},
      {id: 14, url: 'assets/images/4.jpg', description: 'photo 4', isMain: true, dateAdded: date},
      {id: 15, url: 'assets/images/5.jpg', description: 'photo 5', isMain: true, dateAdded: date},
      {id: 16, url: 'assets/images/6.jpg', description: 'photo 6', isMain: true, dateAdded: date},
      {id: 17, url: 'assets/images/7.jpg', description: 'photo 7', isMain: true, dateAdded: date},
      {id: 18, url: 'assets/images/8.jpg', description: 'photo 8', isMain: true, dateAdded: date},
      {id: 19, url: 'assets/images/9.jpg', description: 'photo 9', isMain: true, dateAdded: date},
      {id: 20, url: 'assets/images/1.jpg', description: 'photo 1', isMain: true, dateAdded: date}
    ];

    const trips = [
      { id: 11, title: 'Warsaw', dateAdded: date, startDate: '2020-09-30',
        endDate: '2020-10-29', formOfTransport: 'bus', description: description1, tripPhotos: [photos[0]]},
      { id: 12, title: 'Lisbon', dateAdded: date, startDate: '2020-09-30',
        endDate: '2020-10-29', formOfTransport: 'plane', description: description2, tripPhotos: [photos[1]]},
      { id: 13, title: 'London', dateAdded: date, startDate: '2020-09-30',
        endDate: '2020-10-29', formOfTransport: 'car', description: 'Amazing adventure', tripPhotos: [photos[2]]},
      { id: 14, title: 'Rome', dateAdded: date, startDate: '2020-09-30',
        endDate: '2020-10-29', formOfTransport: 'train', description: 'Amazing adventure', tripPhotos: [photos[3]]},
      { id: 15, title: 'Berlin', dateAdded: date, startDate: '2020-09-30',
        endDate: '2020-10-29', formOfTransport: 'car', description: 'Amazing adventure', tripPhotos: [photos[4]]},
      { id: 16, title: 'Prague', dateAdded: date, startDate: '2020-09-30',
        endDate: '2020-10-29', formOfTransport: 'car', description: 'Amazing adventure', tripPhotos: [photos[5]]},
      { id: 17, title: 'Bratislava', dateAdded: date, startDate: '2020-09-30',
        endDate: '2020-10-29', formOfTransport: 'car', description: 'Amazing adventure', tripPhotos: [photos[6]]},
      { id: 18, title: 'Zagreb', dateAdded: date, startDate: '2020-09-30',
        endDate: '2020-10-29', formOfTransport: 'car', description: 'Amazing adventure', tripPhotos: [photos[7]]},
      { id: 19, title: 'Sydney', dateAdded: date, startDate: '2020-09-30',
        endDate: '2020-10-29', formOfTransport: 'car', description: 'Amazing adventure', tripPhotos: [photos[8]]},
      { id: 20, title: 'Toronto', dateAdded: date, startDate: '2020-09-30',
        endDate: '2020-10-29', formOfTransport: 'car', description: 'Amazing adventure', tripPhotos: [photos[9]]}
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
