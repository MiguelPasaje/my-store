import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class TimeInterceptor implements HttpInterceptor {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const start = performance.now() //para que evalue el timepo inicial
    return next
    .handle(request)
    .pipe(
      tap((dataTap)=> {
        const time = (performance.now() - start) + 'ms'
        console.log(request.url,dataTap,time)
      })//deja correr un proceso sin tener que modificar o cambiar la respuesta que nos envie el observable
    );
  }
}
