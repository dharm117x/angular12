import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  redirectUrl = "/home";
  constructor(private router: Router, private userService: UserService) {

  }

  ngOnInit(): void {
  }

  loginSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);

    if (f.valid && this.userService.login(f.value.username, f.value.password)) {
      this.router.navigate(['/home']);
      //this.handleRedirectAfterSubmit();

    }
    else {
      console.log('Form not valid');
    }
  }

  handleRedirectAfterSubmit() {
    window.location.href = this.redirectUrl
  }
}
