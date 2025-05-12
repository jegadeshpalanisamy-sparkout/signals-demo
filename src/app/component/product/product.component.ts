import { ChangeDetectorRef, Component, computed, effect, linkedSignal, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-product',
  imports: [CardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  constructor(
    private readonly commonService: CommonService,
    private cd: ChangeDetectorRef
  ) { 

    console.log('normal variable value', this.normalVariable);


    effect(() => {
      console.log('signal variable value:', this.signalVariable());
      }
    );
  }

  ngOnInit() {
    this.readonlySignalData();
    this.writableSignalData();
  }
  addToCart(item: string) {
    this.commonService.addItem(item);
  }



  //var vs signal

   normalVariable = 10;
   signalVariable = signal(10);


  updateValue() {
    this.normalVariable = this.normalVariable + 1;
    this.signalVariable.set(this.signalVariable() + 1);
    
  }





  //types

   count: WritableSignal<number> = signal(0);

   writableSignalData() {
    console.log('initial count:', this.count());      //read

    this.count.set(5);
    console.log('after set(5):', this.count());   //write
    
    this.count.update(prev => prev + 2);
    console.log('after update(+2):', this.count());   // update

  }
  


  //readonly signal 
   doubleCount: Signal<number> = computed(() => this.count() * 2);
    readonlySignalData() {
      console.log('doubleCount:', this.doubleCount()); // read
      this.count.set(5);
      console.log('doubleCount after set(5):', this.doubleCount()); // read
    }





    // products = [
    //   { id: 1, name: 'Apple',  price: 2 },
    //   { id: 2, name: 'orange', price: 3 }
    // ];
  

    // selectedProducted = signal<any>([]);

    // selectProduct(product: any) {
      
    //   this.selectedProducted.set(product);
    //   console.log('selectedProducted:', this.selectedProducted());
    // }
  
    // price = computed(() => this.selectedProducted().price ?? 0);
    // quentity = signal(0);
    // // quentity = linkedSignal({
    // //   source: this.selectedProducted,
    // //   computation: () => 0
    // // })
    // total = computed(() => this.price() * this.quentity());

    // onQuentityChanged() {
    //   this.quentity.set(this.quentity() + 1);
    //   console.log('quentity:', this.quentity());
    //   console.log('price:', this.price());
    //   console.log('total:', this.total());
    // } 
       
        
}
