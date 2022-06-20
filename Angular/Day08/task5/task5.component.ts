import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.css']
})
export class Task5Component implements OnInit {

  //Array of Object
  empdata:any[]=[];
  constructor() { }

  ngOnInit() {
  }

  onAdd(id1:any,name1:any,salary1:any){
    let obj={
      id:id1,
      name:name1,
      salary:salary1
    }
    // this.empdata.push({
    //   id:id1,name:name1,salary:salary1
    // })

    this.empdata.push(obj);

  }

  onRemove(index){
      this.empdata.splice(index,1);
  }

}
