import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CategoryComponent } from './pages/category/category.component';
import { MycartComponent } from './pages/mycart/mycart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';


const routes: Routes = [
  //crear reglas
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
