import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-tistimonial',
  templateUrl: './tistimonial.component.html',
  styleUrls: ['./tistimonial.component.css']
})
export class TistimonialComponent implements OnInit {
  id1:string=localStorage['ID']
  constructor(public service:UserserviceService,private toaster:ToastrService) { }

  InsertTesti=new FormGroup({

    Texet :new FormControl('',[Validators.required]),
    Status:new FormControl(0,[Validators.required]),
    //public decimal Customer_Id { get; set; }

    })

  ngOnInit(): void {
  }

  Insert_Testimonial(){
    var obj={
      Customer_Id:parseInt(this.id1),
      Texet:this.InsertTesti.controls['Texet'].value,
      Status:this.InsertTesti.controls['Status'].value
    }
   console.log(obj)
  this.service.Insert_Testimonial(obj)
  window.location.reload()
  }

}
