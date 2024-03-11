import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LabDataBinding';
  data:any = "Hello Wolrd"
  itemImageUrl="https://angular.io/assets/images/logos/angular/shield-large.svg"

  getData(){
    console.log('data');
    this.data = "Hello Angular 12 World";
  }

  resetData(){
    this.data='';
  }


}
