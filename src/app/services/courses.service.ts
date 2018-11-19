import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "../../../node_modules/@angular/common/http";
import { CanActivate, Router } from "@angular/router";
import { map } from "rxjs/operators"


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courseURL: string = 'http://localhost:3000/subjects';
  coursesURL: string = 'http://localhost:3000/subjectsAll';
  constructor(private http: HttpClient,
    private router: Router) { }


  addCourse(course:any):Observable<any>{
    return this.http.post(this.courseURL,course).pipe(map(res => {return res}));
  }

  getSubjects(){
    return this.http.get(this.coursesURL);
  }
}
