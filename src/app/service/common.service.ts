import { Injectable, signal, computed } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonService {


  constructor() { }

  // private cardItems = new BehaviorSubject<string[]>([]);
  // cardItems$ = this.cardItems.asObservable();


  // addItem(item: string) {
  //   const currentItems = this.cardItems.value;
  //   this.cardItems.next([...currentItems, item]);
  // }

  // signal
  private cardItems = signal<string[]>([]); // state

  // // expose readonly signal
  readonly items = computed(() => this.cardItems());

  addItem(item: string) {
    this.cardItems.update(items => [...items, item]);
  }

 

}
