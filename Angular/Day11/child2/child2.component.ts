import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {


  strData:string='Send Data from Child....';

  
  arrobj=[
    {
      name:'Motorolla',
      price:30000,
      quantity:1
    },
    {
      name:'OnePlus',
      price:45000,
      quantity:1
    },
    {
      name:'RealMe',
      price:20000,
      quantity:2
    },
    {
      name:'Samsung',
      price:22000,
      quantity:1
    }
    
  ]

   @Output() ChildStrEvent=new EventEmitter();

   @Output() ChildArrObjEvent=new EventEmitter();

    @Output() ChildFilterEvent=new EventEmitter();

   filterarr:string[]=['Size','Type','Brand'];

   CheckedArray:string[]=[];


  constructor() { }

  ngOnInit() {

  }

  onClick(){

        this.ChildStrEvent.emit(this.strData);

  }

  OnArrObjClick(){
      this.ChildArrObjEvent.emit(this.arrobj);
  }

  OnChange(value,isChecked){

    console.log(value+"===> "+isChecked)
    if(isChecked){
      this.CheckedArray.push(value);
    }

  }

  OnFilter(){
      this.ChildFilterEvent.emit(this.CheckedArray)
  }


}
