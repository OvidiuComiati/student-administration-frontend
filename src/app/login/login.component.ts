import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  student: User = {};
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login(){
    return this.loginService.login(this.student).subscribe(res => console.log(res))
  }

  logout(){
    return this.loginService.logout()
  }
}
