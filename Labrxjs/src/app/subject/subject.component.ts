import { Component, OnDestroy, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit, OnDestroy {

  username:string='';

  constructor(private util:UtilityService) {

  }

  ngOnInit(): void {
    this.util.username.subscribe(res=>{
      this.username=res;
    });
  }

  ngOnDestroy(): void {
    
  }
}
