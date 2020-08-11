import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './Component/about-page/about-page.component';
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
import { UpdateStudentComponent } from './Component/update-student/update-student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {FlexLayoutModule} from "@angular/flex-layout";
import {AuthService} from "./Services/AuthService/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {AuthGuard} from "./AuthGuard/auth.guard";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {ReactiveFormsModule} from "@angular/forms";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from "@angular/material/table";
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { ManageAnnouncementDetailsComponent } from './Component/manage-announcement-details/manage-announcement-details.component';
import { UpdateAnnouncementDetailsComponent } from './Component/update-announcement-details/update-announcement-details.component';
import { ManageExamMarksDetailsComponent } from './Component/manage-exam-marks-details/manage-exam-marks-details.component';
import { UpdateMarkDetailsComponent } from './Component/update-mark-details/update-mark-details.component';
import { NewTeacherComponent } from './Component/new-teacher/new-teacher.component';
import { UpdateTeacherComponent } from './Component/update-teacher/update-teacher.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
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
    UpdateStudentComponent,
    ManageAnnouncementDetailsComponent,
    UpdateAnnouncementDetailsComponent,
    ManageExamMarksDetailsComponent,
    UpdateMarkDetailsComponent,
    NewTeacherComponent,
    UpdateTeacherComponent
  ],
  entryComponents:[ RemoveConfirmationComponent,
                    UpdateStudentComponent,
                    NewAnnouncementComponent,
                    UpdateAnnouncementDetailsComponent,
                    SignupPageComponent,
                    InsertExamMarksComponent,
                    UpdateMarkDetailsComponent,
                    NewTeacherComponent,
                    UpdateTeacherComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableModule,
    MatTooltipModule,
    MatDialogModule
  ],
  providers: [AuthService, HttpClientModule, AuthGuard, MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }
