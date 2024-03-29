import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  regForm = new FormGroup({
    'firstName': new FormControl('kumar', Validators.required),
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
