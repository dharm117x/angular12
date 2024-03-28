import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private us:UserService) { }

  ngOnInit(): void {
  }

  logOut() {
    const user = localStorage.getItem('currentUser');
    console.log('CU:: ->'+user);
    this.us.logout();
  }

}
