import { Component, computed, effect, EventEmitter, input, Input, OnChanges, OnInit, output, Output, signal, SimpleChanges } from '@angular/core';
import { Bike, BikeService } from '../../service/bike.service';

@Component({
  selector: 'app-bike',
  imports: [],
  templateUrl: './bike.component.html',
  styleUrl: './bike.component.css'
})
export class BikeComponent implements OnInit {

  @Input() filter: string = '';
  protected bikes: Bike[] = [];
  filteredBikes: Bike[] = [];

  // filter = input<string>('');


  @Output() onBikeClickEmitter = new EventEmitter<Bike>();
  // onBikeClickOutputSignal = output <Bike>();
  constructor(
    private bikeService: BikeService
  ) { 
    

  }
  ngOnInit(): void {
    this.bikes = this.bikeService.getBikes();
    this.filteredBikes = [...this.bikes];
    this.filterBikes();

  }

  
  
  
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (changes['filter']) {
      this.filterBikes();
    }    
  }

  filterBikes() {
    if (this.filter) {
      this.filteredBikes = this.bikes.filter(bike => bike.name.toLowerCase().includes(this.filter.toLowerCase()));
    } else {
      this.filteredBikes = [...this.bikes];
    }
  }

  




  // filteredBikes = computed(() => {
  //   const searchKey = this.filter().trim().toLowerCase()
  //   ;
  //   if (!searchKey) return this.bikes;
  //   return this.bikes.filter(b =>
  //     b.name.toLowerCase().includes(searchKey) ||
  //     b.model.toLowerCase().includes(searchKey)
  //   );
  // }); 

  onBikeClicked(bike: Bike) {
    this.onBikeClickEmitter.emit(bike);
    // this.onBikeClickOutputSignal.emit(bike);

  }
}
