import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtDecodeOptions } from 'jwt-decode';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class AuthenservicService {

  constructor(private router:Router,private http:HttpClient,private toaster:ToastrService) { }
  
  ValidToken(form:any)
  {
  const headersDict={
    'Content-Type':'application/json',
    'Accept':'application/json'

  }
  const requestOptions={
    headers:new HttpHeaders(headersDict)
  }
  this.http.post('https://localhost:44319/api/User/Auth',form,requestOptions).subscribe((result:any)=>{
    const response={
      token:result.toString()
    }
    var object:any=jwt_decode(response.token)
    console.log(response.token)
    console.log(object)
    localStorage.setItem('Username',object.unique_name)
    localStorage.setItem('role',object.role)

    if(object.role=='6'){

this.router.navigate(['User/'])
this.toaster.success('login has sucess')

    }else if(object.role=='7'){
      
this.router.navigate(['Admin/'])
this.toaster.success('login has susceffullly')
    }
    }
    )

  
   

  }
}


