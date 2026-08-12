import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class UserService {

  private currentUser = {
    username:'',
    email:'',
    password:'',
    isLogin: false
  }


  getUser() {
    return this.currentUser;
  }

  login(username: string, email: string, password: string) {
    this.currentUser.username = username;
    this.currentUser.email = email;
    this.currentUser.password = password;
    this.currentUser.isLogin = true;
  }

  logout() {
    this.currentUser.username = '';
    this.currentUser.email = '';
    this.currentUser.password = '';
    this.currentUser.isLogin = false;
  }

}
