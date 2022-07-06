import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:any[]=[];
  id:string='';
  title:string='';
  body:string='';
  ishidden:boolean=true;


  constructor(private service:HttpService) { }

  ngOnInit() {
    this.GetPost();

  }

  GetPost(){

    this.service.getPost()
    .subscribe((response)=>{
      console.log(response);
      this.posts=(<any> response);
    },(myerror)=>{
      //alert("Error is Occured")

      if(myerror.status>=400 && myerror.status<=499){
        console.log("Client side...");
      }else if(myerror.status>=500 && myerror.status<=599){
        console.log("Server side...");
      }else{
        console.log("Error ...")
      }
    })

  }

  onSend(mytitle,mybody){

    let obj={
      title:mytitle,
      body:mybody
    }

    this.service.PostData(obj)
    .subscribe((response)=>{
      console.log(response)
    })

  }

  onEdit(item){
    console.log(item);
    this.id=item.id;
    this.title=item.title;
    this.body=item.body;
    this.ishidden=false;
  }

  OnUpdate(){
      let obj={
        id:this.id,
        title:this.title,
        body:this.body
      }

      this.service.UpdateData(obj)
      .subscribe((response)=>{
        console.log(response);
      })

  }

  onDelete(id){

    this.service.DeleteData(id)
    .subscribe((response)=>{
      console.log(response);
    })

  }



}
