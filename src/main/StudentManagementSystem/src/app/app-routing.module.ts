import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from "./Component/home-page/home-page.component";
import {AboutPageComponent} from "./Component/about-page/about-page.component";
import {ResultPageComponent} from "./Component/result-page/result-page.component";
import {ContactPageComponent} from "./Component/contact-page/contact-page.component";
import {CoursePageComponent} from "./Component/course-page/course-page.component";
import {TeacherPageComponent} from "./Component/teacher-page/teacher-page.component";
import {AdminPageComponent} from "./Component/admin-page/admin-page.component";
import {SignupPageComponent} from "./Component/signup-page/signup-page.component";
import {MainLoginComponent} from "./Component/main-login/main-login.component";
import {AddAnnouncementDetailsComponent} from "./Component/add-announcement-details/add-announcement-details.component";
import {ManageStudentDetailsComponent} from "./Component/manage-student-details/manage-student-details.component";
import {ManageTeacherDetailsComponent} from "./Component/manage-teacher-details/manage-teacher-details.component";
import {InsertExamMarksComponent} from "./Component/insert-exam-marks/insert-exam-marks.component";
import {AuthGuard} from "./AuthGuard/auth.guard";
import {ManageAnnouncementDetailsComponent} from "./Component/manage-announcement-details/manage-announcement-details.component";
import {NewAnnouncementComponent} from "./Component/new-announcement/new-announcement.component";


const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomePageComponent
  },
  {
    path:'about',
    component:AboutPageComponent
  },
  {
    path:'result',
    component:ResultPageComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'contact',
    component:ContactPageComponent
  },
  {
    path:'course',
    component:CoursePageComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'teacher',
    component:TeacherPageComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin',
    component:AdminPageComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'signup',
    component:SignupPageComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'login',
    component:MainLoginComponent
  },
  {
    path:'announcement',
    component:ManageAnnouncementDetailsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'newAnnouncement',
    component:NewAnnouncementComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'studentDetails',
    component:ManageStudentDetailsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'teacherDetails',
    component:ManageTeacherDetailsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'insertMarks',
    component:InsertExamMarksComponent,
    canActivate:[AuthGuard]
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
