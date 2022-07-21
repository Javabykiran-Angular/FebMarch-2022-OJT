import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
    {
      path:'',redirectTo:"/login",pathMatch:"full"
    },
    {
      path:"login",component:LoginComponent
    },
    {
      path:"home",component:HomeComponent,canActivate:[AuthGuard]
    },
    {
      path:"EmpDetails/:id",component:EmployeedetailsComponent,canActivate:[AuthGuard]
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
