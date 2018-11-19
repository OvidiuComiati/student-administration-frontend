import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { CoursesService } from 'src/app/services/courses.service';
import { LoginService } from '../../services/login.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router';

@Component({
  selector: 'add-for-student',
  templateUrl: './add-for-student.component.html'
})
export class AddForStudentComponent implements OnInit{
  labGrade: number;
  examGrade: number;
  subject: string;
  closeResult: string;
  @Input() email: string;
  constructor(private modalService: NgbModal,
              private loginService: LoginService,
              private router:Router) {}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  ngOnInit(){
    console.log(this)
    console.log(this.email);
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  @Output() sendToParent = new EventEmitter<any>();

  addCourse(){
    let obj = {
      "labGrade" : this.labGrade,
      "examGrade" : this.examGrade,
      "subject" : this.subject
    }
    this.loginService.changeGrade(this.email,obj)
      .subscribe(result => {
        console.log(result);
        this.sendToParent.emit(result.subjects[result.subjects.length-1]);
        this.labGrade = undefined;
        this.examGrade = undefined;
        this.subject = undefined;
      });

    }
}