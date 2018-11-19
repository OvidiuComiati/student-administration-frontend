import {Component, OnInit} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'add-materie-component',
  templateUrl: './add-materie.component.html'
})
export class AddSubjectComponent implements OnInit{
  courseName: string;
  courseCode: string;
  courseCredits: number;
  courseDescription: string;
  courseTeacher: string;
  closeResult: string;

  constructor(private modalService: NgbModal,
              private courseService: CoursesService) {}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  ngOnInit(){
  }

  printMe(){
    console.log(this.courseName +" "+ this.courseTeacher)
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

  addCourse(){
    let course = {
      name: this.courseName,
      code: this.courseCode,
      teacher: this.courseTeacher,
      description: this.courseDescription
    }
    console.log(course);
    return this.courseService.addCourse(course).subscribe( e => console.log(e))
    //this.courseService.addCourse(course)  
  }
}