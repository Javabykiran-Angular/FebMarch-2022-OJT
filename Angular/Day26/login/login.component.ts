import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
  + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

  incorrect:string='';

  constructor(private service:HttpService) { }

  ngOnInit() {
    document.body.className='bg_background';
  }

  onSubmit(f:NgForm){

      let obj={
        email:f.value.email,
        password:f.value.password
      }
      this.service.login(obj)
      .subscribe((response)=>{
        console.log(response)
      })

  }

}
