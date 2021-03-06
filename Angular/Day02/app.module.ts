import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee.component';
import { StudentComponent } from './student/student.component';
import { FooterComponent } from './footer/footer.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    StudentComponent,
    FooterComponent,
    StringInterpolationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,FooterComponent]
})
export class AppModule { }
