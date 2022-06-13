import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  mycolor:string='blue';

  rating:number=21;

  jsonObj={
    color:'blue',
    fontSize:'32px',
    'font-family':'cursive'
  }

  constructor() { }

  ngOnInit() {
  }

}
