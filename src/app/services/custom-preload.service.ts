import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadService implements PreloadingStrategy {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  preload(route: Route, laod: () => Observable<any>): Observable<any> {
    if(route.data && route.data['preload']){
      return laod()
    }
    return of(null)
  }
}
