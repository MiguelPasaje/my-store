import { Injectable } from '@angular/core';

import { Product } from 'src/app/models/product.model';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCart: Product[] = []


  constructor() { }

  addProduct(product: Product){
    this.myShoppingCart.push(product)
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
