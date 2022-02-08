import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { UserserviceService } from 'src/app/userservice.service';
import { DetailsOrderComponent } from '../details-order/details-order.component';

@Component({
  selector: 'app-history-order',
  templateUrl: './history-order.component.html',
  styleUrls: ['./history-order.component.css']
})
export class HistoryOrderComponent implements OnInit {
   id1:string=localStorage['ID']

  SearchOrder=new FormGroup({
    
  
    DateFrom:new FormControl('',[Validators.required]),
    DateTo:new FormControl('',[Validators.required])
    
    
    })
  constructor(public service:UserserviceService,private toaster:ToastrService, private matdialog:MatDialog) {
    this.service.DisplayOrder()
    console.log(this.id1 );
 
   }

  ngOnInit(): void {
  }

  openmatdialog(id:number)
  {​
    const dialog=new MatDialogConfig();
    dialog.scrollStrategy?.enable
   

    
    dialog.data={
      id:id
    }
  this.matdialog.open(DetailsOrderComponent,dialog)
  

  }​

  GetOrderBetweenDate(){
   // this.SearchOrder.controls['CUST_ID'].setValue()
  
  
 
   var obj={


    CUST_ID:parseInt(this.id1),
    DateFrom:this.SearchOrder.controls['DateFrom'].value,
    DateTo:this.SearchOrder.controls['DateTo'].value
    

  }
  console.log(obj)
    this.service.GetOrderBetweenDate(obj)
  }



}
