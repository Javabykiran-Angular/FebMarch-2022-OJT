import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuild-pipe',
  templateUrl: './inbuild-pipe.component.html',
  styleUrls: ['./inbuild-pipe.component.css']
})
export class InbuildPipeComponent implements OnInit {

  strData:string='U r Learning angular 8 From sumit Raokhande';
  num2:number=-452.78956324557;
  mydate=new Date();
  constructor() { }

  ngOnInit() {
  }

}
