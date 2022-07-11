import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myid:number=9;
  myUsername:string='Sumit Raokhande';
   jsonObj={
    id:9,
    fname:"sumit",
    status:"active"
  }
  
  
  constructor(private router:Router) { }

  ngOnInit() {
  }

  onpage1(){
      this.router.navigate(['']);
  }
  onpage2(){
    this.router.navigate(['/Page2',this.myid])
  }
  onpage3(){
    this.router.navigate(['/Page3',this.myid,this.myUsername]);
  }

  onFollower(){
      this.router.navigate(['/Follower'])
  }

  onQueryparam(){
      this.router.navigate(['/QueryParameter'],{
        queryParams:this.jsonObj
      })
  }

}
