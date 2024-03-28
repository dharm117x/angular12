import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getCurrentUser(){

    return localStorage.getItem('currentUser');
  }

  login(username:string, password:string){
    console.log(username + ' ------ '+password)
    if(username.match(password)){
      localStorage.setItem('currentUser',username);
      return true;
    }

    return false;
  }

  logout(){
    localStorage.removeItem('currentUser')
  }
}
