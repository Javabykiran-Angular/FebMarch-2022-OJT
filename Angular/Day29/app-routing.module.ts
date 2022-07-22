import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AuthGuard } from './auth.guard';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { HomeComponent } from './home/home.component';
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
      path:"home",component:HomeComponent,canActivate:[AuthGuard]
    },
    {
      path:"EmpDetails/:id",component:EmployeedetailsComponent,canActivate:[AuthGuard]
    },
    {
      path:"AddEmployee",component:AddEmployeeComponent,canActivate:[AuthGuard]
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
