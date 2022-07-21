import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BaseUrl:string="http://localhost:8080/api/";

  constructor(private http:HttpClient) { }

  login(obj){
   return (this.http.post(`${this.BaseUrl}logincheck`,obj))
  }


  getEmployee(){
    return (this.http.get(`${this.BaseUrl}getallemployee`))
  }

  getEmplyoeeById(id){

    return (this.http.get(`${this.BaseUrl}getemployeebyid/${id}`))
  }


}
