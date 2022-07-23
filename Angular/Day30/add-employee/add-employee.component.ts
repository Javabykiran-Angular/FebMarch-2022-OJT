import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  allCountry:any[]=[];
  constructor(private service:HttpService,
              private router:Router) { }

  ngOnInit() {
    this.GetCoutry();

  }
  GetCoutry(){
      this.service.getCountry()
      .subscribe((response)=>{
        this.allCountry=(<any>response);
      })
  }

  onSubmit(f){

      // console.log(f.value.name);

      console.log(f.value.country)

      let obj={
        name:f.value.name,
        phoneno:f.value.phoneno,
        departmentit:f.value.departmentit,
        status:f.value.status,
        country:f.value.country,
        createdby:sessionStorage.getItem("username"),
        createddtm:Date.now(),
        updatedby:sessionStorage.getItem("username"),
        updateddtm:Date.now()
      }

      this.service.AddEmployee(obj)
      .subscribe((response)=>{
        // console.log(response)
          this.router.navigate(['/home']);
      })



  }

}
