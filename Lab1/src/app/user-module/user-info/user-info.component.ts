import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  userId:string | null='';
  constructor(private route: ActivatedRoute) {}


  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    console.log('UsrID:: ',this.userId)
   
  }

}
