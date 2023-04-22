import { NgModule } from '@angular/core';
import { RouterModule, Routes /* ,PreloadAllModules  */} from '@angular/router';

//PreloadAllModules-> para que carguen los modulos en background

import { NotFoundComponent } from './not-found/not-found.component';
/* import { CustomPreloadService } from './services/custom-preload.service'; */
import { QuicklinkStrategy } from 'ngx-quicklink';
import { AppComponent } from './app.component';


const routes: Routes = [
  //crear reglas
  {
    path: '',
    loadChildren:()=> import('./website/website.module').then(m => m.WebsiteModule),
    data:{
      preload:true,
    }
  },
  {
    path: 'cms',
    loadChildren:()=> import('./cms/cms.module').then(m => m.CmsModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  },
  {
    path: 'appComponent',
    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: QuicklinkStrategy /* CustomPreloadService */
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
