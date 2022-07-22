import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  empobj=<Employee>{};

  constructor(private route:ActivatedRoute,
              private service:HttpService) { }

  ngOnInit() {
      this.GetDataFromUrl();
  }

  GetDataFromUrl(){
        this.route.paramMap
        .subscribe((param)=>{
         
          // console.log(this.myid)

          this.getDataFromBackend(param.get("id"));

        })
  }

  getDataFromBackend(id){
      this.service.getEmplyoeeById(id)
      .subscribe((response)=>{
        // console.log(response);
        this.empobj=(<Employee>response)
      })
  }

  OnUpdate(){
    
  }

}
