import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-queryparameter',
  templateUrl: './queryparameter.component.html',
  styleUrls: ['./queryparameter.component.css']
})
export class QueryparameterComponent implements OnInit {


  obj={
    myid:0,
    myname:'',
    mystatus:''
  }

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.GetDataFromUrl();
  }

  GetDataFromUrl(){
      this.route.queryParamMap
      .subscribe((param)=>{
        this.obj.myid=+param.get("id");
        this.obj.myname=param.get('fname');
        this.obj.mystatus=param.get('status')
      })
  }

}
