import { Component } from '@angular/core';
import { UserdataService } from './services/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Lab2';
  users:any;

  datas = [
    {'id':100, 'name':'DK'},
    {'id':101, 'name':'SK'},
    {'id':102, 'name':'PK'},
    {'id':103, 'name':'VK'},
    ]
  
    constructor(private user: UserdataService){
      user.getOnlineUsers().subscribe((data)=>this.users=data);
      console.warn(this.users);
    }
    
}
