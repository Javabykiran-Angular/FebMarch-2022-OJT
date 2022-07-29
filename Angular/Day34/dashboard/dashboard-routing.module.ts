import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { AuthGuard } from '../auth.guard';
import { EmployeedetailsComponent } from '../employeedetails/employeedetails.component';
import { HomeComponent } from '../home/home.component';


const routes: Routes = [

  {
    path:"",component:HomeComponent,canActivate:[AuthGuard]
  },
  {
    path:"EmpDetails/:id",component:EmployeedetailsComponent,canActivate:[AuthGuard]
  },
  {
    path:"AddEmployee",component:AddEmployeeComponent,canActivate:[AuthGuard]
  },
  {
    path:"**", pathMatch:'full',redirectTo:"/login"
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
