import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';

import {StoreService} from 'src/app/services/store.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  myShoppingCart: Product[] = []
  total = 0
  products: Product[] = [
    {
      id:'1',
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
    },
    {
      id:'2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      id:'3',
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      id:'4',
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      id:'5',
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      id:'6',
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }

  ]

  constructor(
    private storeService:StoreService
  ){
    this.myShoppingCart = this.storeService.getShoppingCart()

  }

  onAddToShopingcart(product:Product){
    //console.log(product)
    //this.myShoppingCart.push(product)
    //console.log(this.myShoppingCart)
    //this.total = this.myShoppingCart.reduce((sum,item)=> sum + item.price,0)
    //this.total += product.price
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal()
  }
}
