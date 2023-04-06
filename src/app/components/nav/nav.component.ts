import { Component, OnInit } from '@angular/core';

import { StoreService } from '../../services/store.service'
import { AuthService } from './../../services/auth.service'
import { User } from './../../models/user.model'


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeMenu = false;
  counter = 0;
  token = ''
  profile:User | null = null;

  constructor(
    private storeService: StoreService,
    private authService:AuthService
  ){

  }

  ngOnInit(): void{
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length;
    })
  }

  toggleMenu(){
    this.activeMenu = !this.activeMenu;
    console.log('btn')
  }

  /* auth */
  login(){
    this.authService.login('miguel@gmail.com','12345')
    .subscribe(rta => {
      //console.log(rta.access_token);
      this.token = rta.access_token;
      console.log(this.token);
      this.getProfile()//aqui hay un callback hell
    })
  }
  getProfile(){
    this.authService.profile(this.token)
    .subscribe(user =>{
      console.log(user)
      this.profile = user;
    })

  }

}
