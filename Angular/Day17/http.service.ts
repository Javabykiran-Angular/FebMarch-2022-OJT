import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url:string="https://jsonplaceholder.typicode.com/posts";
       //   http://localhost:8080/post;

  constructor(private http:HttpClient) { }

    getPost(){
     return (this.http.get(this.url));
    }


    

}
