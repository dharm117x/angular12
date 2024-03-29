import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log('Template form oninit');
  }

  ngOnDestroy(): void {
    console.log('Template form on destroy');
  }
  
  submit(f:NgForm){
    console.log(f.value);
  }
}
