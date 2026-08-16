import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserCard } from "./user-card/user-card";
import { Form } from "./form/form";
import { UserService } from './services/user';
import { HeaderComponent } from "./header/header";
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { AddProductComponent } from "./product/product";

// 42 : 30

@Component({
  selector: 'app-root',
  imports: [FormsModule, UserCard, Form, HeaderComponent, RouterOutlet, RouterLink, AddProductComponent],
  templateUrl: './app.html',
  styleUrl: './app.css' ,
  standalone : true
})

export class App {

  title = "Hello, Abdelhafid";
  count = 0 ;
  username = '';
  isLogin = false ;

  users = [
    {
      username: 'john_doe',
      age: 30,
      email: 'john.doe@example.com',
      password: 'secure123' ,
      isActive: true
    },
    {
      username: 'jane_smith',
      age: 25,
      email: 'jane.smith@example.com',
      password: 'anotherSecure123',
      isActive: false
    }
  ]

  reset(){
    this.count = 0 ;
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  login() {
    this.isLogin = true ;
  }
  logout(){
    this.isLogin = false ;
  }

  constructor(private UserService : UserService){
  }
}
