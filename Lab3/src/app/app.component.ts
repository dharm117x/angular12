import { Component } from '@angular/core';
import { FormControl,FormControlName, FormGroup, Validators } from '@angular/forms';
import { createPasswordStrengthValidator } from 'src/validators/createPasswordStrengthValidator';
import { noWhitespaceValidator } from 'src/validators/noWhitespaceValidator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Reactive form';

  loginForm = new FormGroup({
    user:new FormControl('', [Validators.required, Validators.email, noWhitespaceValidator]),
    password:new FormControl('', [Validators.required, Validators.minLength(5), createPasswordStrengthValidator()])
  });

  loginUser(){
    console.log(this.loginForm.value);
  }

  get user(){
       return this.loginForm.get('user');
  }

  get password(){
    return this.loginForm.get('password');
  }

  get userError() {
    if (this.loginForm.get('user')?.hasError('required'))
      return 'user field is required';

    if (this.loginForm.get('user')?.hasError('whitespace'))
      return 'Please enter a valid user';

    else
      return '';
  } 
}
