import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categoryId: string | null = null
  products: Product[] = []
  limit = 10 ;
  offset = 0;

  constructor(
    private route:ActivatedRoute,
    private productService:ProductsService
  ){ }

  ngOnInit():void{
    this.route.paramMap.subscribe(params => {
      this.categoryId = params.get('id')// 'id' este nombre debe estar giual en app-routing -> :id **1
      console.log(this.categoryId,'id category url')
      if (this.categoryId) {
        this.productService.getByCategory(this.categoryId,this.limit,this.offset)
        .subscribe(data =>{
          this.products = data
          console.log(data)
        })
      }

    })
  }
}
