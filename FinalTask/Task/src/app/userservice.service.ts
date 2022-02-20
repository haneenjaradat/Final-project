import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { order1 } from './order1';
import { IdetailsOrder } from './User/IdetailsOrder';
import { IUpdateCode } from './User/IUpdateCode';
import { Visa } from './Visa';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  public data1:any
  public data2:any=[{}]
  public dataVisa:any=[{}]
  public updatecode:any=[{}]
  id?:number
  constructor(private router:Router,private http:HttpClient,private toaster:ToastrService) {
    
    }
  

    DisplayOrder(){
      
    var id=localStorage.getItem('ID')
    this.http.get<order1[]>('https://localhost:44319/api/Orders/DisplayOrderUser/'+id).subscribe((result)=>{this.data1=result
    console.log(this.data1+"lllll")
    //this.toaster.success('hello','all retreive data')
if(this.data1.length==0)
{
  this.toaster.error('hello','frwejfiohwiofewhiofhewoifhew')
}
else
{


  this.toaster.success('the data is retreive ')
}
    
    
    
    },(err)=>{


if(err.status==0)
{



  this.toaster.error('djsaopdhasoifhsioafhioashfioashfioas','fdsajpfoasjpofajposfjpoajsf')
}



    }
    )
   }
  
   GetInfoVisa(){
    var id=localStorage.getItem('ID')
    this.http.get<Visa>('https://localhost:44319/api/Payment/GetVisaByUserID/'+id).subscribe((result)=>{this.dataVisa=result})


   }

   DisplayDetailsOrder(id:number){
 
    this.http.get<IdetailsOrder[]>('https://localhost:44319/api/Orders/DisplayDetailsOrder/'+id).subscribe((result)=>{this.data2=result})
   
 }

  Update_Balance(form:any){
  const headersDict={
    'Content-Type':'application/json',
    'Accept':'application/json'

  }
  const requestOptions={
    headers:new HttpHeaders(headersDict)
  }
  
  this.http.post('https://localhost:44319/api/Payment/UpdateBalance',form,requestOptions).subscribe((result:any)=>{
    this.toaster.success('Update')},(res)=>{this.toaster.warning('server is not available')})

  
  }
  
  Insert_Testimonial(form:any){
    const headersDict={
      'Content-Type':'application/json',
      'Accept':'application/json'
  
    }
    const requestOptions={
      headers:new HttpHeaders(headersDict)
    }
    
    this.http.post('https://localhost:44319/api/Testimonial/InsertTestimonial',form,requestOptions).subscribe((result:any)=>{
      const response={
        re:result.toString() 
      }
      if(response.re=='valid')
      this.toaster.success('Submit Testimonial')
    
      else
      this.toaster.warning('Wrong Submit ')

})
  
    
    }

 GetOrderBetweenDate(orderdate:any){

  const headersDict={
    'Content-Type':'application/json',
    'Accept':'application/json'

  }
  const requestOptions={
    headers:new HttpHeaders(headersDict)
  }
  this.http.post<order1[]>('https://localhost:44319/api/Orders/DisplayOrderBetweenDateUser',orderdate,requestOptions).subscribe((result:any)=>{
    const response={
      re:result 
    }
  
    this.data1=response.re
  })

    
 console.log(this.data1)

 }
 
 update_code(){
  var id=localStorage.getItem('ID')
  this.http.get<IUpdateCode>('https://localhost:44319/api/Payment/UpdateeCode/'+id).subscribe((result)=>{this.updatecode=result})

 }
}
