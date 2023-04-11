import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpStatusCode } from '@angular/common/http'
import { retry,catchError,map } from 'rxjs/operators'
import {throwError, zip } from 'rxjs'

import { CreateProductDTO, Product, UpdateProductDTO } from 'src/app/models/product.model';
import { checkTime } from '../interceptors/time.interceptor';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = `${environment.API_URL}/api/products`;

  constructor(
    private http:HttpClient
  ) { }

  getAllProducts(limit?:number, offset?:number){
    let params = new HttpParams();
    if (limit && offset) {
      params = params.set('limit',limit);
      params = params.set('offset',offset);
    }
    return this.http.get<Product[]>(this.apiUrl, {params,context:checkTime()})
    .pipe(
      retry(3),
      map(prducts => prducts.map(item => {
        return{
          ...item,
          taxes: .19 * item.price //impuestos
        }
      }))
    );
  }

  fetchReadAndUpdate(id:string, dto:UpdateProductDTO){
    return zip(
      this.getProduct(id),
      this.update(id,dto)
    )
  }

  getProduct(id:string){
    return this.http.get<Product>(`${this.apiUrl}/${id}` )
    .pipe(
      catchError((error:HttpErrorResponse)=>{
        if (error.status == HttpStatusCode.Conflict) {//500
          return throwError(()=> new Error ('algo esta fallando en el server'))
        }
        if (error.status == HttpStatusCode.NotFound) {//404
          return throwError('el producto no extiste')
        }
        if (error.status == HttpStatusCode.Unauthorized) {//401
          return throwError('No estas autorizado para entrar en esta página')
        }
        return throwError('algo salio mal')

      })
    )
  }

  getProductsByPage(limit:number, offset:number){ //paginacion
    return this.http.get<Product[]>(`${this.apiUrl}`,{
      params:{limit,offset},
      context:checkTime()
    }, ).pipe(
      retry(3),
      map(prducts => prducts.map(item => {
        return{
          ...item,
          taxes: .19 * item.price //impuestos
        }
      }))
    )
  }


  create(dto: CreateProductDTO){ //tdo = data transfer object
    return this.http.post<Product>(this.apiUrl,dto);
  }

  update(id:string, dto:UpdateProductDTO){
    return this.http.put<Product>(`${this.apiUrl}/${id}`,dto)
  }


  delete(id:string){
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`)
  }

}
