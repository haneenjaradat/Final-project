import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {

  constructor(private http:HttpClient,private router:Router,) { }

  signup(form:any)
  {
   
      const headersDict={
      'content-type':'application/json',
      Accept:'application/json'
    }
  
    const requestOptions={
      headers: new HttpHeaders(headersDict),
    }
    this.http.post('https://localhost:44319/api/User/AddUser',form,requestOptions).subscribe((result)=>{
      const response={
      res:result
    }
    if(result){
      this.router.navigate(['login'])
    }
    
    
    })
    



}}
