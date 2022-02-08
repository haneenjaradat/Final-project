import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-update-balance',
  templateUrl: './update-balance.component.html',
  styleUrls: ['./update-balance.component.css']
})
export class UpdateBalanceComponent implements OnInit {
  id1:string=localStorage['ID']

  data=[{}]

  UpdateBalance=new FormGroup({

    Visa_Balance :new FormControl(this.service.dataVisa['balanc'],[Validators.required]),
   
    })

  constructor(public service:UserserviceService,private toaster:ToastrService) {

    this.service.GetInfoVisa()
    console.log(service.dataVisa['id'])
     console.log(service.dataVisa['visa_Number'])
   }

  ngOnInit(): void {
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


   check():boolean{
     return false;
   }
}
