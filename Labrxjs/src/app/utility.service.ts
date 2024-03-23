import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService implements OnInit {
 // username = new Subject<string>();

  username = new BehaviorSubject<string>('Dharmendra');
  constructor() { }

  ngOnInit(): void {
    
  }
}
