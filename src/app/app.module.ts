import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component'
import {LoginComponent} from './login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';
//import { AddSubjectComponent } from './user-details/add-materie/add-materie.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoursesService } from './services/courses.service';
import { LoginService } from './services/login.service';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardGuard } from './auth-guard.guard';
import { AddForStudentComponent } from './user-details/add-for-student/add-for-student.component';
import {SubjectlistComponent} from './subjectlist/subjectlist.component'
import {AddSubjectComponent} from './subjectlist/add-materie/add-materie.component';
//import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes =[
    {path:'', canActivate:[AuthGuardGuard], component: HomeComponent, children: [
      {path:'student-list', component: StudentlistComponent},
      {path:'student-details/:email', component: UserDetailsComponent},
      {path:'subject-list',component: SubjectlistComponent}
    ]},
    
    {path:'register', component: RegisterComponent},
    {path:'login',component: LoginComponent},
    {path:'details/:{name}', component: UserDetailsComponent},
    {path:'**', component: NotFoundComponent}
  ]

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      RegisterComponent,
      HomeComponent,
      NavbarComponent,
      LoginComponent,
      NotFoundComponent,
      UserDetailsComponent,
      StudentlistComponent,
      AddForStudentComponent,
      SubjectlistComponent,
      AddSubjectComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      NgbModule,
      HttpClientModule,
      RouterModule.forRoot(routes)
   ],
   exports: [
      RouterModule
   ],
   providers: [
      CoursesService,
      LoginService
   ],
   bootstrap: [
      AppComponent
   ]
 
})
export class AppModule { }
