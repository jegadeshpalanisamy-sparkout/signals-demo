import { Injectable } from '@angular/core';

export interface Bike {
  id: number;
  name: string;
  model: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor() { }

  private bikes: Bike[] = [
    { id: 1, name: 'Roadster', model: 'RT-100', price: 500 },
    { id: 2, name: 'Mountain King', model: 'MK-200', price: 800 },
    { id: 3, name: 'City Cruiser', model: 'CC-300', price: 650 },
    { id: 4, name: 'Speedster', model: 'SP-400', price: 1200 },
    { id: 5, name: 'Trail Blazer', model: 'TB-500', price: 950 },
  ];


  getBikes(): Bike[] {
    return [...this.bikes];
  }
}
