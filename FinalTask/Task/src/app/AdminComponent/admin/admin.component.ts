import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { 
   var s= localStorage.getItem('Username')
   console.log(s);
  }

  ngOnInit(): void {
  }
logout()
{
  localStorage.clear()
}

}
