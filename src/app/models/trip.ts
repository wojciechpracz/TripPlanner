import { Photo } from './photo';

export interface Trip {
    id?: number;
    title: string;
    dateAdded: Date;
    startDate: Date;
    endDate: Date;
    formOfTransport: string;
    description: string;
    tripPhotos?: Photo[];
  }