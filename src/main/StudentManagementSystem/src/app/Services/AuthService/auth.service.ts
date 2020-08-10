import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {CommonService} from "../CommonService/common.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedUserRoleType:string = 'none';

  adminRoleEncryptCodeNumber:string = '<<#$12"3"45$#-12%123>>';
  studentRoleEncryptCodeNumber:string = '<<FF#$123ER32??@#DDW>>';
  teacherRoleEncryptCodeNumber:string = '<<3@32$23A@#45GR12SS>>';


  constructor(private _router: Router,
              private _commonService: CommonService) { }

  loggedInUser(){
    return !! localStorage.getItem('token')
  }

  adminLogged(){
    return !! (localStorage.getItem('role') == this.adminRoleEncryptCodeNumber);
  }

  teacherLogged(){
    return !! (localStorage.getItem('role') == this.teacherRoleEncryptCodeNumber);
  }

  authenticateUser(userID, passWord, userType){

    if (userType == '_STUDENT_'){

      let Student = {
        studentTokenID:'',
        studentID:'',
        studentName:'',
        studentAddress:'',
        studentPassword:'',
        studentD0B:'',
        studentGender:'',
        studentPhone:'',
        studentParent:''
      };

      this._commonService.authenticateStudentByStudentID(userID).subscribe(res=>{

        Student = res;

        if (userID == Student.studentID && passWord == Student.studentPassword){
          this._commonService.snackBarShow("Login Success ! Welcome " + Student.studentName);
          this.loggedUserRoleType = this.studentRoleEncryptCodeNumber;
          localStorage.setItem('token',Student.studentTokenID.toString());
          localStorage.setItem('studentID',Student.studentID.toString());
          localStorage.setItem('role',this.loggedUserRoleType);
          localStorage.setItem('name',Student.studentName.split(' ')[0]);
          if (this._commonService.tempLocation.length == 0){
            this._router.navigate(['home']);
          }else {
            this._router.navigate([this._commonService.tempLocation.pop()]);
          }
        }else {
          this._commonService.snackBarShow("Wrong Credentials");
        }
      })

    }else if (userType == '_ADMIN_'){

      let Admin = {
        adminTokenID:'',
        adminID:'',
        password:'',
      };

      this._commonService.authenticateAdminByAdminID(userID).subscribe(res=>{
        Admin = res;
        console.log(Admin);

        if (userID == Admin.adminID && passWord == Admin.password){
          this._commonService.snackBarShow("Login Success ! Welcome ");
          this.loggedUserRoleType = this.adminRoleEncryptCodeNumber;
          localStorage.setItem('name',Admin.adminID);
          localStorage.setItem('token',Admin.adminTokenID.toString());
          localStorage.setItem('role',this.loggedUserRoleType);
          if (this._commonService.tempLocation.length == 0){
            this._router.navigate(['home']);
          }else {
            this._router.navigate([this._commonService.tempLocation.pop()]);
          }
        }else {
          this._commonService.snackBarShow("Wrong Credentials");
        }

      },error => {
        this._commonService.snackBarShow("DB error");
      });

    }else if (userType == '_TEACHER_'){

      let Teacher = {
        teacherTokenID:'',
        teacherID:'',
        teacherName:'',
        teacherPassword:'',
        teacherGender:'',
        teacherEmail:'',
        teacherContactNO:''
      };

      this._commonService.authenticateTeacherByID(userID).subscribe(res => {
          Teacher = res;

        if (userID == Teacher.teacherID && passWord == Teacher.teacherPassword){
          this._commonService.snackBarShow("Login Success ! Welcome " + Teacher.teacherName);
          this.loggedUserRoleType = this.teacherRoleEncryptCodeNumber;
          localStorage.setItem('token',Teacher.teacherTokenID);
          localStorage.setItem('role',this.loggedUserRoleType);
          localStorage.setItem('name',Teacher.teacherName.split(' ')[0]);
          if (this._commonService.tempLocation.length == 0){
            this._router.navigate(['home']);
          }else {
            this._router.navigate([this._commonService.tempLocation.pop()]);
          }
        }else {
          this._commonService.snackBarShow("Wrong Credentials");
        }

      });

    }else {

    }

  }


  logOutUser(){
    this.localStorageClearing();

    if (this._commonService.tempLocation.length != 0){
      this._commonService.tempLocation = [];
    }

    this._router.navigate(['home']);
  }

  localStorageClearing(){
    if(localStorage.getItem('token') != null){
      localStorage.removeItem('token');
    }
    if(localStorage.getItem('studentID') != null){
      localStorage.removeItem('studentID');
    }
    if (localStorage.getItem('role') != null){
      localStorage.removeItem('role');
    }
    if (localStorage.getItem('name') != null){
      localStorage.removeItem('name');
    }
  }

}
