import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-component',
  templateUrl: './server-component.component.html',
  styleUrls: ['./server-component.component.css']
})
export class ServerComponentComponent implements OnInit {

  allowedServer = false;
  server='';
  constructor() { 
    setTimeout(() =>{
      this.allowedServer=true;
    }, 3000)
  }

  ngOnInit(): void {
  }

  addServer(){
    this.server="Cloud Server Created"
  }

}
