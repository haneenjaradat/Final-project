import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { UserserviceService } from 'src/app/userservice.service';
import { DetailsOrderComponent } from '../details-order/details-order.component';

@Component({
  selector: 'app-history-order',
  templateUrl: './history-order.component.html',
  styleUrls: ['./history-order.component.css']
})
export class HistoryOrderComponent implements OnInit {

  SearchOrder=new FormGroup({
    
    CUST_ID:new FormControl(localStorage.getItem("ID"),[Validators.required]),
    DateFrom:new FormControl('',[Validators.required]),
    DateTo:new FormControl('',[Validators.required])
    
    
    })
  constructor(public service:UserserviceService,private toaster:ToastrService, private matdialog:MatDialog) {
    this.service.DisplayOrder()
    
    this.toaster.success('Retrive All History Orders')
   }

  ngOnInit(): void {
  }

  openmatdialog(id:number)
  {​
  this.matdialog.open(DetailsOrderComponent,{​data:{​id:id}​}​)
  }​

  GetOrderBetweenDate(){
    this.service.GetOrderBetweenDate(this.SearchOrder.value)
  }

}
