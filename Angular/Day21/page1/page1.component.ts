import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  myReceivedData:string='';

  constructor(private mynotification:NotificationService) { }

  ngOnInit() {
    this.GetNotificationData();
  }

  GetNotificationData(){
    this.mynotification.notification
    .subscribe((data)=>{
      this.myReceivedData=data;
    })
  }

}
