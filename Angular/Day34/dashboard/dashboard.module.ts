import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { EmployeedetailsComponent } from '../employeedetails/employeedetails.component';
import { FilterPipe } from '../filter.pipe';
import { HomeComponent } from '../home/home.component';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MaterialModule } from '../shared/material.module';



@NgModule({
  declarations: [ 
    HomeComponent,
    EmployeedetailsComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    HeaderComponent, 
    FilterPipe
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    NgxPaginationModule,
    MaterialModule,
  ]
})
export class DashboardModule { }
