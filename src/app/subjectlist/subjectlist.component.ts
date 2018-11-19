import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-subjectlist',
  templateUrl: './subjectlist.component.html',
  styleUrls: ['./subjectlist.component.css']
})
export class SubjectlistComponent implements OnInit {

  subjectsSelected:boolean = false;
  subjects;
  constructor(private subjectService: CoursesService) { }

  ngOnInit() {
    console.log(this.subjects);
    this.subjectService.getSubjects().subscribe(result => {
      console.log(result);
      this.subjects = result;
      var vari: boolean = !!this.subjects[0].name
      console.log(vari);
    });
  }

  selectStudents() {
    this.subjectsSelected = !this.subjectsSelected;
  }

}
