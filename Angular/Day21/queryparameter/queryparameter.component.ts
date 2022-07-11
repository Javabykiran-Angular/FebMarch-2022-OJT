import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../notification.service';

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

  constructor(private route:ActivatedRoute,
              private myNotification:NotificationService) { }

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

  onSend(nameValue:string){
      // console.log(nameValue);
      this.myNotification.SendData(nameValue);
  }

}
