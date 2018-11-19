import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: String 
  email: String
  password: String
  confirmedPassword: String

  constructor(private registerService: LoginService) { }

  ngOnInit() {
  }

  registerUser(){
    let user = {
      username: this.username,
      email: this.email,
      password: this.password
    }
    console.log(user);
    return this.registerService.register(user).subscribe( e => console.log(e))
  }
}
