import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { RouterModule } from '@angular/router';

import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ImgComponent } from './components/img/img.component';
import { HighlightDirective } from './directives/highlight.directive';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { ReversePipe } from './pipes/reverse.pipe';


@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent,
    HighlightDirective,
    ImgComponent,
    ReversePipe,
    TimeAgoPipe,

  ],
  imports: [
    CommonModule,
    SwiperModule,
    RouterModule
  ],
  exports:[
    ProductComponent,
    ProductsComponent,
    HighlightDirective,
    ImgComponent,
    ReversePipe,
    TimeAgoPipe,
  ]
})
export class SharedModule { }
