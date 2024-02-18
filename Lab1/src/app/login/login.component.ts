import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userData:any={};

  getFormData(data:FormData){
    this.userData=data;
    console.log(data)
  }
}
