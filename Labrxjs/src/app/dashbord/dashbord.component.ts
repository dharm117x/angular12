import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit,OnDestroy {

  private myObsebable!: Subscription;

  constructor() { }

  ngOnInit(): void {
    const promise = new Promise((resolve, reject) => {
      console.log("Promise Async Work Complete");
      setTimeout(() => {
        resolve('Promise call...');
        resolve('Promise call...1');
        resolve('Promise call...2');
        
      }, 1000);
    });

    promise.then(res => console.log(res));

    const observable = new Observable(res => {
      console.log("Observable Async Work Complete");
      let c = 0;
      
      setInterval(()=>{
        c=c+1;
        res.next(c);
      },1000);

      setTimeout(() => {
        res.next('Observable working.');
        res.next('Observable working.1');
        res.next('Observable working.2');       
      }, 2000);

      setTimeout(()=>{
        res.error('Observable Error Throw');

      },5000);
      
    });

    this.myObsebable =  observable.subscribe(res => console.log(res) );
   

    setTimeout(() => {
      this.myObsebable.unsubscribe();
    }, 10000);
   
  }

  ngOnDestroy(): void {
    this.myObsebable.unsubscribe();
  }
  
}
