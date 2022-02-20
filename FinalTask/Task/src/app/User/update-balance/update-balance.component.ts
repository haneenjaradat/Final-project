import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { UserserviceService } from 'src/app/userservice.service';
import { SubUpdatecodeComponent } from '../sub-updatecode/sub-updatecode.component';
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
@Component({
  selector: 'app-update-balance',
  templateUrl: './update-balance.component.html',
  styleUrls: ['./update-balance.component.css']
})
export class UpdateBalanceComponent implements OnInit {
  id1:string=localStorage['ID']
  code?:string
  data=[{}]
  resultcode?:boolean
  d?:string

  UpdateBalance=new FormGroup({

    Visa_Balance :new FormControl(this.service.dataVisa['balanc'],[Validators.required]),
   
    })

  constructor(public service:UserserviceService,private toaster:ToastrService,public dialog: MatDialog) {

    this.service.GetInfoVisa()
     //this.d='0' + (service.dataVisa['experd_Date'].getMonth() + 1).toString().slice(-2) + '-' + new Date().getFullYear().toString();
 
    console.log(service.dataVisa['id'])
     console.log(service.dataVisa['visa_Number'])
   }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.service.update_code()
    const dialogRef = this.dialog.open(SubUpdatecodeComponent, {
      width: '250px',
      data: { code: this.code},
      panelClass:['my-class']
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.code = result;
      console.log(this.code)
      if(this.service.updatecode['code']==this.code){

        this.Update_Balance()
        
      }
      else{

        //this.resultcode=false
      //Swal.fire("Sucess message", "Text here", "success");
      //this.erroalert()
      this.erroalert()
      }
    });

  }

  Update_Balance(){

      var obj={
        UserId:parseInt(this.id1),
        Visa_Balance:this.UpdateBalance.controls['Visa_Balance'].value,
       
      }

     this.service.Update_Balance(obj)
     console.log(obj)
     window.location.reload()
     }
     
   

     erroalert(){  
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
  }
  
  

  }


  


  
