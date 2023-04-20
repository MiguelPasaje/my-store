import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './website/pages/home/home.component';
import { NotFoundComponent } from './website/pages/not-found/not-found.component';
import { CategoryComponent } from './website/pages/category/category.component';
import { MycartComponent } from './website/pages/mycart/mycart.component';
import { LoginComponent } from './website/pages/login/login.component';
import { RegisterComponent } from './website/pages/register/register.component';
import { RecoveryComponent } from './website/pages/recovery/recovery.component';
import { ProfileComponent } from './website/pages/profile/profile.component';
import { ProductDetailComponent } from './website/pages/product-detail/product-detail.component';
import { LayoutComponent } from './website/components/layout/layout.component';


const routes: Routes = [
  //crear reglas
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path: '',
        redirectTo: 'home',
        pathMatch:'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'category/:id', // id debe llamrse igual en donde se vaya a utilizar **1
        component: CategoryComponent
      },
      {
        path: 'product/:id', // id debe llamrse igual en donde se vaya a utilizar **1
        component: ProductDetailComponent
      },
      {
        path: 'notFoundComponent',
        component: NotFoundComponent
      },
      {
        path: 'mycartComponent',
        component: MycartComponent
      },
      {
        path: 'loginComponent',
        component: LoginComponent
      },
      {
        path: 'registerComponent',
        component: RegisterComponent
      },
      {
        path: 'recoveryComponent',
        component: RecoveryComponent
      },
      {
        path: 'profileComponent',
        component: ProfileComponent
      },
    ]
  },
  {
    path: 'cms',
    loadChildren:()=> import('./cms/cms.module').then(m => m.CmsModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
