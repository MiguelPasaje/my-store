import { Injectable } from '@angular/core';
import { HttpClient/* , HttpHeaders */ } from '@angular/common/http'

import { Auth } from '../models/auth.model'
import { User } from '../models/user.model';
import { switchMap, tap } from 'rxjs';
import { TokenService } from './token.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://young-sands-07814.herokuapp.com/api/auth'

  constructor(
    private http: HttpClient,
    private tokenService:TokenService
  ) { }

  login(email:string, password:string){
    return this.http.post<Auth>(`${this.apiUrl}/login`,{email,password})
    .pipe(
      tap(response => this.tokenService.savenToken(response.access_token))
    )
  }

  getProfile(){
    //const headers = new HttpHeaders();
    //headers.set('Authorization',`Bearer ${token}`)
    return this.http.get<User>(`${this.apiUrl}/profile`, {
     /*  headers:{
        Authorization: `Bearer ${token}`,
        //'content-type': 'aplication/json'
      } */
    })
  }

  loginAndGet(email:string,password:string){
    return this.login(email,password)
    .pipe(
      switchMap(()=> this.getProfile())
    )
  }
}
