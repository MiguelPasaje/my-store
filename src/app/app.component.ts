import { Component } from '@angular/core';

// import {Product} from './product.model'

import { Product} from './models/product.model'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   imgParent = ''

   onloaded(img:string){
    console.log('log padre',img)
   }


  /* curso 1 */
  name = 'Miguel';
  age = 28;
  img = 'https://catalyst-au.net/wp-content/uploads/2021/12/top-programing-languages.jpeg';
  btnEstado = true;

  register = {
    name: '',
    email:'',
    password:''
  }

  widthImg = 10;

  names:string[] = ['Nico','Miguel','Andres']
  newName = '';

  box= {
    width:100,
    height:100,
    background:'red'
  }

  person = {
    name : 'Miguel',
    age : 58,
    img : 'https://catalyst-au.net/wp-content/uploads/2021/12/top-programing-languages.jpeg',
    btnEstado : true,
  }

 
  showImg = true;

  /* products: Product[]= [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ] */


  toggleButton(){
    this.btnEstado = !this.btnEstado;
  }

  increaseAge(){
    this.age += 1;
  }
  onScroll(event:Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
  }

  changeName(event:Event){
    const element = event.target as HTMLInputElement;
    this.name = element.value
  }

  addName(){
    this.names.push(this.newName)
    this.newName = ''
  }
  deleteName(index:number){
    this.names.splice(index,1)

  }

  onRegister(){
    console.log(this.register)
  }

  toggleImg(){
    this.showImg = !this.showImg;
  }

}
