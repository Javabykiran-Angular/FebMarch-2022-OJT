import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';


import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
    {
      path:'',redirectTo:"/login",pathMatch:"full"
    },
    {
      path:"login",component:LoginComponent
    },
    {
      path:"home",loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
    },
    
    {
      path:'**',component:NotFoundComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
