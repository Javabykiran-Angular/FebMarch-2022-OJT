import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  strData:string='Data from Parent...'

  jsonObj={
    id:9,
    fname:'Sumit',
    lname:'Raokhande'
  }

  myCourse:string='';

  constructor() { }

  ngOnInit() {
  }

  OnSelect(course:string){
    console.log(course);
    this.myCourse=course;
  }

}
