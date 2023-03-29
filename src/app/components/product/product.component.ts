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
      image : '',
      price: 0,
      category:'',
      description:''
    }
    @Output() addedProduct = new EventEmitter<Product>();

  constructor(){

  }

  onAddCart(){
    this.addedProduct.emit(this.product)

  }

}
