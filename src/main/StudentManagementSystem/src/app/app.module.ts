import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './Component/about-page/about-page.component';
import { AddAnnouncementDetailsComponent } from './Component/add-announcement-details/add-announcement-details.component';
import { AdminPageComponent } from './Component/admin-page/admin-page.component';
import { CommonServiceComponent } from './Component/common-service/common-service.component';
import { ContactPageComponent } from './Component/contact-page/contact-page.component';
import { CoursePageComponent } from './Component/course-page/course-page.component';
import { HomePageComponent } from './Component/home-page/home-page.component';
import { InsertExamMarksComponent } from './Component/insert-exam-marks/insert-exam-marks.component';
import { MainLoginComponent } from './Component/main-login/main-login.component';
import { ManageStudentDetailsComponent } from './Component/manage-student-details/manage-student-details.component';
import { ManageTeacherDetailsComponent } from './Component/manage-teacher-details/manage-teacher-details.component';
import { NewAnnouncementComponent } from './Component/new-announcement/new-announcement.component';
import { RemoveConfirmationComponent } from './Component/remove-confirmation/remove-confirmation.component';
import { ResultPageComponent } from './Component/result-page/result-page.component';
import { SignupPageComponent } from './Component/signup-page/signup-page.component';
import { TeacherPageComponent } from './Component/teacher-page/teacher-page.component';
import { UpdateStudentComponent } from './Component/update-student/update-student.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    AddAnnouncementDetailsComponent,
    AdminPageComponent,
    CommonServiceComponent,
    ContactPageComponent,
    CoursePageComponent,
    HomePageComponent,
    InsertExamMarksComponent,
    MainLoginComponent,
    ManageStudentDetailsComponent,
    ManageTeacherDetailsComponent,
    NewAnnouncementComponent,
    RemoveConfirmationComponent,
    ResultPageComponent,
    SignupPageComponent,
    TeacherPageComponent,
    UpdateStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
