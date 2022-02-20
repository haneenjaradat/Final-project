import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA ,MatDialog} from '@angular/material/dialog';
import { UpdateBalanceComponent } from '../update-balance/update-balance.component';
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
@Component({
  selector: 'app-sub-updatecode',
  templateUrl: './sub-updatecode.component.html',
  styleUrls: ['./sub-updatecode.component.css']
})
export class SubUpdatecodeComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<UpdateBalanceComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{code:string}) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
    this.erroalert()
    
  }
  erroalert(){  
       
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
}






}
