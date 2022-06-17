import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-directive',
  templateUrl: './for-directive.component.html',
  styleUrls: ['./for-directive.component.css']
})
export class ForDirectiveComponent implements OnInit {

  course:string[]=['Angular 8','React Js','Embber Js','Vue js','JSP'];

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
selected:string='';
  constructor() { }

  ngOnInit() {
  }



  onMouseOver(item){
    console.log('--Mouse Over Event Occur--')

    this.selected=item.name;

  }

  onMouseOut(){
    this.selected='';
  }

}
