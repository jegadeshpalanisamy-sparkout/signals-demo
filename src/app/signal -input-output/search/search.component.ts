import { Component } from '@angular/core';
import { Bike, BikeService } from '../../service/bike.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BikeComponent } from "../bike/bike.component";

@Component({
  selector: 'app-search',
  imports: [CommonModule, FormsModule, BikeComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchTerm: string = ''; 
  selectedBike: any; 

  constructor(
    private bikeService: BikeService
  ) { 
   

  }
  
  selectedBikes($event: any) {
    console.log('Selected bikes:', $event);
    this.selectedBike = $event;

  }

}
