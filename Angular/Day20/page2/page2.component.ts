import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  myId:number=0;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {

      this.GetDataFromURL();
      
  }

  GetDataFromURL(){
    this.route.paramMap
    .subscribe((param)=>{
       this.myId=+param.get("id")
    })

  }

}
