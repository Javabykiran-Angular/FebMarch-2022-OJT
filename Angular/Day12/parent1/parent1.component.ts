import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Child3Component } from '../child3/child3.component';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit,AfterViewInit {

  @ViewChild('maindiv',{static:false}) MyDiv:ElementRef;

  @ViewChild(Child3Component,{static:false}) ChildCompAccess:Child3Component;

  constructor() { 
    console.log(this.MyDiv);
  }

  ngOnInit() {

    console.log("U r in ngOnInit "+this.MyDiv);

  }

  ngAfterViewInit(): void {
    // console.log("U r in ngAfterViewInit ");
    // console.log(this.MyDiv);

    // this.MyDiv.nativeElement.style.background='red';

    this.MyDiv.nativeElement.classList='box';
    this.MyDiv.nativeElement.style.width="500px"

  }

  onChildProperty(){
    this.ChildCompAccess.username='Sumit Raokhande';
  }

  onChildMethod(){
    this.ChildCompAccess.onChildAlert();
  }


}
