import { Component } from '@angular/core';
import {AuthService} from "./Services/AuthService/auth.service";
import {CommonService} from "./Services/CommonService/common.service";
import {interval} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {UpdateStudentComponent} from "./Component/update-student/update-student.component";
import {UpdateTeacherComponent} from "./Component/update-teacher/update-teacher.component";

class Student {
  studentTokenID:string = '';
  studentID:string = '';
  studentFirstName:string = '';
  studentLastName:string = '';
  studentName:string ='';
  studentAddress:string ='';
  studentPassword:string ='';
  studentD0B:string ='';
  studentGender:string ='';
  studentPhone:string ='';
  studentParent:string ='';
}

class Teacher {
  teacherTokenID: string;
  teacherID: string;
  teacherName: string;
  teacherPassword: string;
  teacherGender: string;
  teacherEmail: string;
  teacherContactNO: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StudentManagementSystem';
  noOfNotifications:number=0;

  student:Student;
  teacher:Teacher;

  uName:string='user'
  uGender:string='none'

  componentName:string='Dashboard';

  constructor(private _authService:AuthService,
              private  _commonService:CommonService,
              private _matDialog:MatDialog) {
    this.uName = localStorage.getItem('name');
  }



  logOutUser(){
    this.uName = localStorage.getItem('name');
    this._authService.logOutUser();
  }


  getNoOfNotifications(){
    this.uName = localStorage.getItem('name');
    this.uGender = localStorage.getItem('gender');
    return this._commonService.getNotificationNumber();
  }

  toggleLogOutButton(){
    this.uName = localStorage.getItem('name');
    this.uGender = localStorage.getItem('gender');
    return this._authService.loggedInUser();
  }

  toggleTeacherPanel(){
    this.uName = localStorage.getItem('name');
    this.uGender = localStorage.getItem('gender');
    return this._authService.teacherLogged();
  }

  toggleAdminPanel(){
    this.uName = localStorage.getItem('name');
    this.uGender = localStorage.getItem('gender');
    return this._authService.adminLogged();
  }

  toggleStudentPanel(){
    this.uName = localStorage.getItem('name');
    this.uGender = localStorage.getItem('gender');
    return this._authService.studentLogged();
  }

  clicked(routeName:string){
    this._commonService.tempLocation.push(routeName);

  }

  componentNameUpdate(componentName:string){
    //this._commonService.setCurrentInComponentName(componentName);
    this.componentName = componentName;
  }

  userName(){
    return this._commonService.userName;
  }

  userConfig() {
    let userRole = localStorage.getItem('role');

    if (userRole == '<<FF#$123ER32??@#DDW>>'){

      let studentID = localStorage.getItem('studentID');
      this._commonService.authenticateStudentByStudentID(studentID).subscribe( res => {
        this.student = res;

        this._matDialog.open(UpdateStudentComponent, {
          disableClose:true,
          width:"50%",
          data:{
            studentData:this.student
          }
        }).afterClosed().subscribe( res=>{
          if (res == "false"){
            this._commonService.snackBarShow("Action Terminated by the user!");
          }
        })

      }, error => {
        this._commonService.snackBarShow("DB error")
      });

    }else {

      let teacherID = localStorage.getItem('teacherID');
      this._commonService.authenticateTeacherByID(teacherID).subscribe( res => {
        this.teacher = res;

        this._matDialog.open(UpdateTeacherComponent,{
          disableClose:true,
          width:"50%",
          data:{
            teacherDetails:this.teacher
          }
        }).afterClosed().subscribe( res=> {
          if (res == "false") {
            this._commonService.snackBarShow("Action Terminated By the User!")
          }
        })

      }, error => {
        this._commonService.snackBarShow("DB error")
      });

    }

  }
}
