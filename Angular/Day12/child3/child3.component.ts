import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {
  username:string='Default Name';
  constructor() { }

  ngOnInit() {
  }

  onChildAlert(){
    alert("Welcome the User "+this.username+" Visit Again!!!")
  }

}
