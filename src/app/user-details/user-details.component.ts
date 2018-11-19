import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { LoginService } from '../services/login.service';
import { User } from '../model/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  identifier: string;
  private link: string;
  student: User;
  email: string;
  studentName: string;
  constructor(private route: ActivatedRoute, private loginService: LoginService) { }
  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.identifier = params.get('email');
        console.log(params);
        //this.email = params.get('email');
        this.loginService.getStudent(this.identifier).subscribe( result => {
          
          this.student =  result;
          console.log(this.student.email)
        });
      });
  }


  computeAverage() {
    console.log(this.student.email);
    this.loginService.computeAverage(this.student.email)
      .subscribe(result => {
        console.log(result);
      })
  }

  getSubject($event) {
    console.log("something");
    console.log($event);
    this.student.subjects.push($event);
  }

}
