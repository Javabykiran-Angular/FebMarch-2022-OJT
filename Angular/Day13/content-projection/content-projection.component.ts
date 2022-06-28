import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.css']
})
export class ContentProjectionComponent implements OnInit {

    // htmlTag="Email <input type='text'>";
    htmlTag="<h1>Email Address</h1>";



  constructor() { }

  ngOnInit() {
  }

  onChange(myvalue:string){

    console.log("In Paraent ts ===> "+myvalue)
  }

}
