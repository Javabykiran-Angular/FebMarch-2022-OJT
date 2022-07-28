import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ParticlesModule } from 'angular-particle';
import { HeaderComponent } from './header/header.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { NotFoundComponent } from './not-found/not-found.component'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component'; 
import { MatConfirmDialogComponent } from './shared/mat-confirm-dialog/mat-confirm-dialog.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './filter.pipe';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    EmployeedetailsComponent,
    AddEmployeeComponent,
    NotFoundComponent,
    UpdateEmployeeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ParticlesModule,
    BrowserAnimationsModule,
    MaterialModule,
    ModalModule.forRoot(),
    NgxPaginationModule,
    ToastrModule.forRoot({
      timeOut:5000,
      positionClass:'toast-top-right',
      preventDuplicates:true
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[MatConfirmDialogComponent]
})
export class AppModule { }
