import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding3',
  templateUrl: './event-binding3.component.html',
  styleUrls: ['./event-binding3.component.css']
})
export class EventBinding3Component implements OnInit {

  name:string='';
  name2:string='';

  constructor() { }

  ngOnInit() {
  }

  onKeyUp(){
    console.log('Key Up event Occur...')
  }

  onKeydown(){
    console.log('Key Down Event Occur...')
  }

  OnKeyEnter(){
    console.log('Enter key pressed')
  }

}
