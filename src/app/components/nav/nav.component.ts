import { Component, OnInit } from '@angular/core';

import { StoreService } from '../../services/store.service'
import { AuthService } from './../../services/auth.service'
import { User } from './../../models/user.model'
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/models/product.model';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeMenu = false;
  counter = 0;
  profile:User | null = null;
  categories: Category[] = []

  constructor(
    private storeService: StoreService,
    private authService:AuthService,
    private categoriesService:CategoriesService
  ){

  }

  ngOnInit(): void{
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length;
    })
    this.getAllCategories()
  }

  toggleMenu(){
    this.activeMenu = !this.activeMenu;
    console.log('btn')
  }

  /* auth */
  login(){
    /* this.authService.login('miguel@gmail.com','12345')
    .subscribe(rta => {
      //console.log(rta.access_token);
      this.token = rta.access_token;
      console.log(this.token);
      this.getProfile()//aqui hay un callback hell
    }) */
    this.authService.loginAndGet('miguel@gmail.com','12345')
    .subscribe(user =>{
      this.profile = user;
    })
  }

  getAllCategories(){
    this.categoriesService.getAll().subscribe(data =>{
      this.categories = data
    })
  }


}
