import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContextToken,
  HttpContext
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import Swal from 'sweetalert2';

const CHECK_TIME = new HttpContextToken<boolean>(()=> false)

export function checkTime(){
  return new HttpContext().set(CHECK_TIME,true)
}

@Injectable()
export class TimeInterceptor implements HttpInterceptor {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (request.context.get(CHECK_TIME)) {
      const start = performance.now() //para que evalue el timepo inicial
      return next
      .handle(request)
      .pipe(
        tap((dataTap)=> {
          const time = (performance.now() - start) + ' milisegundos <---'
          console.log(request.url,dataTap,time)
          /* Swal.fire(time) */
        })//deja correr un proceso sin tener que modificar o cambiar la respuesta que nos envie el observable
      );

    }
    return next.handle(request)
  }

}
