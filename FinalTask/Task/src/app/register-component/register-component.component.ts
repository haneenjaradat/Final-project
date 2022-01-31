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
    Gender : new FormControl('',[Validators.required]),
    Username :new FormControl('',[Validators.required]),
    Password :new FormControl('',[Validators.required]),
    DateReg : new FormControl('',[Validators.required])
  
  
  })
  
  constructor(public service:RegisterserviceService) { }

  ngOnInit(): void {
  }

  getValue()
  {
    console.log(this.useregister.value)
    this.service.signup( this.useregister.value)
   //  this.useregister.value

  }

}
