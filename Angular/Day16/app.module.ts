import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee.component';
import { StudentComponent } from './student/student.component';
import { FooterComponent } from './footer/footer.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBinding1Component } from './event-binding1/event-binding1.component';
import { EventBinding2Component } from './event-binding2/event-binding2.component';
import { FormsModule } from '@angular/forms';
import { EventBinding3Component } from './event-binding3/event-binding3.component';
import { IfDirectiveComponent } from './if-directive/if-directive.component';
import { ForDirectiveComponent } from './for-directive/for-directive.component';
import { Task5Component } from './task5/task5.component';
import { SwitchdirectiveComponent } from './switchdirective/switchdirective.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { Parent1Component } from './parent1/parent1.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { Child4Component } from './child4/child4.component';
import { InbuildPipeComponent } from './inbuild-pipe/inbuild-pipe.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { SummaryPipe } from './summary.pipe';
import { CourseComponent } from './course/course.component';
import { CourseService } from './utility/course.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    StudentComponent,
    FooterComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    StyleBindingComponent,
    ClassBindingComponent,
    EventBinding1Component,
    EventBinding2Component,
    EventBinding3Component,
    IfDirectiveComponent,
    ForDirectiveComponent,
    Task5Component,
    SwitchdirectiveComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    Parent1Component,
    ContentProjectionComponent,
    Child4Component,
    InbuildPipeComponent,
    CustomPipeComponent,
    SummaryPipe,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
