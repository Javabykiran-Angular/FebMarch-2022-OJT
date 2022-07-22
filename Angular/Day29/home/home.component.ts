import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  empdata:any[]=[];

  constructor(private service:HttpService) { }

  ngOnInit() {
   this.GetDataFromBackend();
  }

  GetDataFromBackend(){
      this.service.getEmployee()
      .subscribe((response)=>{
          this.empdata=(<any>response);
          console.log(this.empdata);
      })
  }


}
