import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Lab1';
  name = 'Dharmendra kumar';
  display = '';

  getValue(){
    return "function data";
  }

  getName(name:any){
    alert(name);
  }

  getData(data:any){
    this.display=data;
    console.log(data)
  }
}
