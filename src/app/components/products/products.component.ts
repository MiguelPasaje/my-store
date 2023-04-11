import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators'
/* import { zip } from 'rxjs' */

import { CreateProductDTO, Product, UpdateProductDTO } from 'src/app/models/product.model';

import { StoreService } from 'src/app/services/store.service'
import { ProductsService } from 'src/app/services/products.service'
import Swal from 'sweetalert2';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent  implements OnInit {

  myShoppingCart: Product[] = []
  total = 0

  productChosen:Product = {
    id : '',
    title : '',
    images : [],
    price: 0,
    category:{
      id : 0,
      name:''
    },
    description:''
  } ;

  limit = 10 ;
  offset = 0;

  statusDetail: 'loading' | 'success' | 'error' | 'init' = 'init';

  /* products: Product[] = [
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

  ] */




  products: Product[] = []
  today = new Date()
  date = new Date(2021,1,21)
  showProductDetail = false


  constructor(
    private storeService:StoreService,
    private productsService:ProductsService
  ){
    this.myShoppingCart = this.storeService.getShoppingCart()

  }

  ngOnInit() {
    this.productsService.getProductsByPage(10,0)
    .subscribe(data => {
      console.log(data)
      this.products = data;
    })
   /*  this.productsService.getAllProducts()
    .subscribe(data => {
      console.log(data)
      this.products = data;
    }) */
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

  onShowDetail(id:string){
    this.statusDetail = 'loading'
    console.log('id',id)
    this.toggleProductDetail()
    this.productsService.getProduct(id).subscribe(data=>{
      //console.log('product',data)
     // this.showProductDetail = !this.showProductDetail;
      this.productChosen = data;
      this.statusDetail = 'success';
    },response => {
      console.log(response)
      //alert(response)
      //window.alert(response)
      Swal.fire({
        title:'Error',
        text:response,
        icon:'error',
        confirmButtonColor:'gray',
        confirmButtonText:'ok'
      })
      this.statusDetail = 'error'
    })
  }

  readAndUpdate(id:string){
    this.productsService.getProduct(id)
    .pipe(
      switchMap((product)=> this.productsService.update(product.id, {title: 'changeReadAndupdate'})),
      //switchMap((product)=> this.productsService.update(product.id, {title: 'changeReadAndupdate'})),
    )
    .subscribe(data => {
      console.log(data)
    });

    this.productsService.fetchReadAndUpdate(id, {title: 'changeReadAndupdate'})
    .subscribe(data => {
      console.log(data); // recibo la data en forma de array ya que zip trae varias respuestas
    })

  }

  toggleProductDetail(){
    this.showProductDetail = !this.showProductDetail;
  }

  createNewProduct(){
    const product:CreateProductDTO = {
      title:'nuevo producto',
      description: 'bla',
      images:['https://placeimg.com/640/420/any'],
      price:1000,
      categoryId:3,
    }
    this.productsService.create(product).subscribe(data => {
      console.log(data, 'created')
      this.products.unshift(data)//inserta el producto creado en primera posicion
    })
  }

  updateProduct(){
    const changes: UpdateProductDTO = {
      title: 'change title',
    }
    const id = this.productChosen.id;
    this.productsService.update(id,changes)
    .subscribe(data => {
      console.log('update',data)
      const productIndex = this.products.findIndex(item => item.id === this.productChosen.id)
      this.products[productIndex] = data;
      this.productChosen = data
    })
  }

  deleteProduct(){
    const id = this.productChosen.id;
    this.productsService.delete(id)
    .subscribe(()=>{
      const productIndex = this.products.findIndex(item => item.id === this.productChosen.id)
      this.products.splice(productIndex,1)
      this.showProductDetail = false;
    })
  }

  loadMore(){
    this.productsService.getProductsByPage(this.limit,  this.offset)
    .subscribe(data => {
      console.log(data)
      this.products = this.products.concat(data);
      this.offset += this.limit;
    })

  }

}
