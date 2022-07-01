import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  strDetails:string="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum accusantium aliquid labore fugit eligendi, nihil explicabo eaque ipsum ratione at. Ex rerum nobis minima pariatur libero consequatur eos facilis officiis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum accusantium aliquid labore fugit eligendi, nihil explicabo eaque ipsum ratione at. Ex rerum nobis minima pariatur libero consequatur eos facilis officiis?";
  constructor() { }

  ngOnInit() {
  }

}
