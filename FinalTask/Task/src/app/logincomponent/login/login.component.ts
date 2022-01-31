import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenservicService } from 'src/app/authenservic.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{

LOGINGRUP=new FormGroup({

username:new FormControl('',[Validators.required]),
password:new FormControl('',[Validators.required])


})





  constructor(public authenservice:AuthenservicService) { }

  ngOnInit(): void {
  }

getvalue()
{


this.authenservice.ValidToken(this.LOGINGRUP.value)

}  




}
