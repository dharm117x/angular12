import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserdataService {

  url = "http:localhost:9001/users"
  constructor(private http: HttpClient) { 

  }

  getOnlineUsers(){
    return  this.http.get(this.url);
  }

  getUsers() {
    return [
      { 'id': 100, 'name': 'DK' },
      { 'id': 101, 'name': 'SK' },
      { 'id': 102, 'name': 'PK' },
      { 'id': 103, 'name': 'VK' },
    ]
  }
}
