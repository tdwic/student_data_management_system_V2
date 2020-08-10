import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../Services/AuthService/auth.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.css']
})
export class MainLoginComponent implements OnInit {

  userType:string;

  userRoleAnnotationForAdmin:string = "AD";
  userRoleAnnotationForStudent:string = "ST";
  userRoleAnnotationForTeacher:string = "TE";

  loginForm = new FormGroup(
    {
      userId:new FormControl(),
      password: new FormControl()
    }
  )

  constructor(private _authService:AuthService,
              private _router:Router) {

  }

  ngOnInit(): void {
  }

  loginUser(){
    console.log("clicked");
    const userName = this.loginForm.get('userId').value;
    const passWord = this.loginForm.get('password').value;

    this.userType = userName.substring(0,2);

    console.log(userName);
    console.log(this.userType);

    if (this.userType == this.userRoleAnnotationForStudent){
      //alert("Login User Role "+this.userType+" Student");
      this._authService.authenticateUser(userName,passWord, "_STUDENT_");
    }else if (this.userType == this.userRoleAnnotationForAdmin){
      //alert("Login User Role "+this.userType+" Admin");
      this._authService.authenticateUser(userName,passWord, "_ADMIN_");
    }else if (this.userType == this.userRoleAnnotationForTeacher){
      //alert("Login User Role "+this.userType+" Teacher");
      this._authService.authenticateUser(userName,passWord, "_TEACHER_");
    }else {

    }

  }


}
