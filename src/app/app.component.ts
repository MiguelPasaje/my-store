import { Component } from '@angular/core';

// import {Product} from './product.model'

import { AuthService } from './services/auth.service'
import { UsersService } from './services/users.service'
import { FilesService } from './services/files.service';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-root',
  /* templateUrl: './app.component.html', */ //descomentar esta linea y comentar la otra para poder crear el user y poder loguearse 
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   imgParent = ''
   imgRta = ''

  private apiUrl = 'https://young-sands-07814.herokuapp.com/api/files'


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
  token = '';

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

  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private fileService: FilesService,
    private http: HttpClient
  ){

  }

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


  /* auth */
  createUser(){
    this.usersService.create({
      name:'miguel',
      email:'miguel@gmail.com',
      password:'12345',
     /*  role:'admin' */
    })
    .subscribe(rta => {
      console.log(rta);

    })
  }

  downloadPdf(){
    this.fileService.getFile('my.pdf','https://young-sands-07814.herokuapp.com/api/files/dummy.pdf', 'application/pdf')
    .subscribe()
  }

  uploadFile(file:Blob){
    const dto = new FormData();
    dto.append('file',file);
    return this.http.post(`${this.apiUrl}/upload`,dto,{
     /*  headers:{
        'Content-type': "multipart/form-data"
      } */
    })
  }

  onUpload(event:Event){
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0)
    if (file) {
      this.fileService.uploadFile(file)
      .subscribe(rta => {
        this,this.imgRta = rta.location
      })
    }
  }

  /* login(){
    this.authService.login('miguel@gmail.com','12345')
    .subscribe(rta => {
      //console.log(rta.access_token);
      this.token = rta.access_token;
      console.log(this.token)
    })
  }
  getProfile(){
    this.authService.profile(this.token)
    .subscribe(profile =>{
      console.log(profile)
    })

  } */
}
