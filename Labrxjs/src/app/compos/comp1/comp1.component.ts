import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  username!: string;
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
