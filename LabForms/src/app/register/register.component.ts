import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }


  regForm = new FormGroup({
    'firstName': new FormControl('', Validators.required),
    'email': new FormControl('', {}),
    'username': new FormControl('', {}),
    'password': new FormControl('', {}),
    'phone': new FormControl('', {}),
    'gender': new FormControl('', {})      
  });

  onSubmit(){
    console.log(this.regForm.value);
  }

    


}
