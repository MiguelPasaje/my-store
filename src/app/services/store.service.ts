import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

import { Product } from 'src/app/models/product.model';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCart: Product[] = []
  private myCart = new BehaviorSubject<Product[]>([]);

  myCart$ = this.myCart.asObservable();


  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  addProduct(product: Product){
    this.myShoppingCart.push(product)
    this.myCart.next(this.myShoppingCart)
  }

  getTotal(){
    //this.total = this.myShoppingCart.reduce((sum,item)=> sum + item.price,0)
    //this.total += product.price
    return this.myShoppingCart.reduce((sum,item)=> sum + item.price,0)
  }
  getShoppingCart(){
    return this.myShoppingCart
  }
}
