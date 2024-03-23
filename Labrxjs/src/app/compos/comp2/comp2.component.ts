import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  username:string='';
  constructor(private util:UtilityService) { }

  ngOnInit(): void {
    this.util.username.subscribe(res=>{
      this.username=res;
    });
  }

  onChange(uname:any){
    //console.log(uname);
    console.log(uname.value);
    this.util.username.next(uname.value);
  }
}
