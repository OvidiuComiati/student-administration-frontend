import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  isLoggedIn: boolean 
  studentsSelected:boolean = false;
  //students: any[]=[{ nume: 'andrei',sectie: 'CTI-EN', medie: 9.59},{ nume: 'andrei',sectie: 'CTI-EN', medie: 9.59},{ nume: 'andrei',sectie: 'CTI-EN', medie: 9.59}];


  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.isLoggedIn = true
  }

  onLogout(){
    this.loginService.logout()
    this.isLoggedIn = !this.isLoggedIn
    console.log(this.isLoggedIn)
  }

  selectStudents() {
    this.studentsSelected = !this.studentsSelected;
  }


}
