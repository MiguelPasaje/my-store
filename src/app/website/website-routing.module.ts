import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';


import { MycartComponent } from './pages/mycart/mycart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'category',
        loadChildren:()=> import('./pages/category/category.module').then(m => m.CategoryModule),
        data:{
          preload: true,
        }

      },
      {
        path: 'product/:id', // id debe llamrse igual en donde se vaya a utilizar **1
        component: ProductDetailComponent,
      },
      /*       {
        path: 'notFoundComponent',
        component: NotFoundComponent
      }, */
      {
        path: 'mycartComponent',
        component: MycartComponent,
      },
      {
        path: 'loginComponent',
        component: LoginComponent,
      },
      {
        path: 'registerComponent',
        component: RegisterComponent,
      },
      {
        path: 'recoveryComponent',
        component: RecoveryComponent,
      },
      {
        path: 'profileComponent',
        component: ProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebsiteRoutingModule {}
