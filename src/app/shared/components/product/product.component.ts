import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from 'src/app/models/product.model';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {



  //@Input('my-product') product: Product = {
    @Input() product: Product = {
      id : '',
      title : '',
      images : [],
      price: 0,
      category:{
        id : 0,
        name:''
      },
      description:''
    }
    @Output() addedProduct = new EventEmitter<Product>();
    @Output() showProduct = new EventEmitter<string>();//string para solo mandar el id y con él poder hacer un request


  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(){

  }

  onAddCart(){
    this.addedProduct.emit(this.product)

  }

  onShowDetail(){
    this.showProduct.emit(this.product.id)

  }

}
