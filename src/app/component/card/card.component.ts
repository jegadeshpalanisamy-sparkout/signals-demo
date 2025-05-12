import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  constructor(
    private readonly commonService: CommonService
  ) { }
 


  // items: string[] = [];


  ngOnInit() {
    // this.commonService.cardItems$.subscribe(data => {
    //   this.items = data;
    //   console.log('items:', this.items);
    // });
  }

   // // create local signal
  items = computed(() => this.commonService.items());



  // protected a = 10;
  // protected b = 20;
  // protected c = this.a + this.b;
 
  // protected x = signal(10);
  // protected y = signal(20);
  // protected z = computed(() => this.x() + this.y());
  // updateValue() {
  //   this.a = this.a +1;
  //   this.x.update(prev => prev + 1);
  // }


}
