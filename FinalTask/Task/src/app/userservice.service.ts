import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { order1 } from './order1';
import { IdetailsOrder } from './User/IdetailsOrder';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  data1:any=[{}]
  data2:any=[{}]
  id?:number
  constructor(private router:Router,private http:HttpClient) {
    
    }
  

    DisplayOrder(){
     var id=localStorage.getItem('ID')
      this.http.get<order1[]>('https://localhost:44319/api/Orders/DisplayOrderUser/'+id).subscribe((result)=>{this.data1=result})
     
   }

   DisplayDetailsOrder(id:number){
    this.http.get<IdetailsOrder[]>('https://localhost:44319/api/Orders/DisplayDetailsOrder/'+id).subscribe((result)=>{this.data2=result})
   
 }

 GetOrderBetweenDate(orderdate:any){

  const headersDict={
    'Content-Type':'application/json',
    'Accept':'application/json'

  }
  const requestOptions={
    headers:new HttpHeaders(headersDict)
  }
  this.http.post('https://localhost:44319/api/Orders/DisplayOrderBetweenDateUser',orderdate,requestOptions).subscribe((result:any)=>{
    const response={
      data1: result
    }})



 }
 
}
