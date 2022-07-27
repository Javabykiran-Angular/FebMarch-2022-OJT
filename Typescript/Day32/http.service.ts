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

  getCountry(){
    return (this.http.get(`${this.BaseUrl}getallcountry`))
  }

  AddEmployee(obj){
    return (this.http.post(`${this.BaseUrl}addemployee`,obj,{responseType:'text'}))
  }

  UpdateEmployee(obj){
      return  (this.http.put(`${this.BaseUrl}updateemployee`,obj,{responseType:'text'}))
  }

  DeleteRecord(id){
      return (this.http.delete(`${this.BaseUrl}deleteemployee/${id}`,{responseType:'text'}))
  }

}
