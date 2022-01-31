import { DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterserviceService } from '../registerservice.service';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {

  useregister= new FormGroup({

    Fname: new FormControl('',[Validators.required]),
    Lname : new FormControl('',[Validators.required]),
    Email : new FormControl('',[Validators.required,Validators.email]),
    Phone : new FormControl('',[Validators.required]),
    Address : new FormControl('',[Validators.required]),
    Gender :new FormControl(1,[Validators.required]),
    Username :new FormControl('',[Validators.required]),
    Password :new FormControl('',[Validators.required]),
    DateReg : new FormControl("2018-03-29T13:34:00.000",[Validators.required]),
    SkinColor : new FormControl("Fair",[Validators.required]),
    Height : new FormControl(170,[Validators.required]),
    Weight : new FormControl(86,[Validators.required]),
    Lx : new FormControl("jhg67yhh",[Validators.required]),
    Ly : new FormControl("jhgyft",[Validators.required]),
    Age : new FormControl(23,[Validators.required]),
    Salary : new FormControl(678,[Validators.required]),
    Rol_Id : new FormControl(6,[Validators.required]),
    Image_Path:new FormControl('jhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',[Validators.required])
  })
 
  constructor(public service:RegisterserviceService) { }

  ngOnInit(): void {
  }

  getValue()
  {
    console.log(this.useregister.value)
    this.service.signup(this.useregister.value)
   //  this.useregister.value

  }

}
