import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';

import { ProductsService } from 'src/app/services/products.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent   implements OnInit  {

  products: Product[] = []
  limit = 10 ;
  offset = 0;
  productId: string | null = null;


  constructor(
    private productsService:ProductsService,
    private route: ActivatedRoute

  ){}

  ngOnInit() {
    this.productsService.getProductsByPage(10,0)
    .subscribe(data => {
      console.log(data)
      this.products = data;
    });
    this.route.queryParamMap.subscribe(params => {
      this.productId = params.get('product')
      console.log('---',this.productId)
    })

  }

  onLoadMore(){
    this.productsService.getProductsByPage(this.limit,  this.offset)
    .subscribe(data => {
      console.log(data)
      this.products = this.products.concat(data);
      this.offset += this.limit;
    })
  }

}
