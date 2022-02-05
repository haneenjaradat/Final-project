import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserserviceService } from 'src/app/userservice.service';


@Component({
  selector: 'app-details-order',
  templateUrl: './details-order.component.html',
  styleUrls: ['./details-order.component.css']
})
export class DetailsOrderComponent implements OnInit {
 
  id?:number
  constructor(private matdialog:MatDialog ,@Inject(MAT_DIALOG_DATA) public data:{id:number},public service:UserserviceService) {

    this.service.DisplayDetailsOrder(data.id)
    console.log(data.id)
   }

  ngOnInit(): void {
  }

}
