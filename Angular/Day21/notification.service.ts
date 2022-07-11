import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  //  notification=new Subject<string>();
  notification=new BehaviorSubject('Welcome ');
    //next => it emits a data 

  constructor() { }

  SendData(msg:string){
    this.notification.next(msg)
  }


}
