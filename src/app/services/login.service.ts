import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { HttpClient } from "../../../node_modules/@angular/common/http";
import { Observable } from "../../../node_modules/rxjs";
import { map } from "rxjs/operators"
import { CanActivate, Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class LoginService  {
  registerURL: string = 'http://localhost:3000/Users';
  loginURL: string = 'http://localhost:3000/login';
  logoutURL: string = 'http://localhost:3000/me/token';
  studentsURL: string = 'http://localhost:3000/studentsAll';
  studentURL: string = 'http://localhost:3000/Users/';
  courseURL: string = 'http://localhost:3000/subjects';
  gradesURL: string = 'http://localhost:3000/Users/';
  averageURL: string = 'http://localhost:3000/Users/';

  constructor(private http: HttpClient,
              private router: Router) {}

  login(user: User): Observable<User> {
    //login + saving token to lokal storage
    return this.http.post<User>(this.loginURL, user).pipe(map(res => {
      localStorage.setItem('token',res.tokens[0].token)
      return res;
    }));
  }

  computeAverage(email: string): Observable<User> {
    console.log(email);
    console.log(this.averageURL);
    return this.http.patch(this.averageURL+email+'/average',{});
  }

  register(user): Observable<any>{ //any
    return this.http.post(this.registerURL,user).pipe(map(res => { // aici fara user
      //localStorage.setItem('token',res.tokens[0].token) //not that line
      return res;
    }));
  }

  logout(){
   return localStorage.clear()
  }

  changeGrade(email: string,param: any): Observable<User>{
    return this.http.patch(this.gradesURL + email,param);
  }

  getStudent(email: string):Observable<User> {
    return this.http.get(this.studentURL+email);
  }

  getStudents(){
    return this.http.get(this.studentsURL);
  }

  isLoggedIn(){
    return !! localStorage.getItem('token')
  }  

  
}
