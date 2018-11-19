import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  studentsSelected:boolean = false;
  students;
  constructor(private userService: LoginService) { }
  ngOnInit() {
    console.log(this.students);
    this.userService.getStudents().subscribe(result => {
      console.log(result);
      this.students = result;
      console.log(this.students);
    });
  }
  

  selectStudents() {
    this.studentsSelected = !this.studentsSelected;
  }

}
