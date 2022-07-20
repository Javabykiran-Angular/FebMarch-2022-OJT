import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // myusername:string='';

  constructor() { }

  ngOnInit() {
    // this.myusername=sessionStorage.getItem("username");
  }

}
