import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CommonService} from "../../Services/CommonService/common.service";

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  signUpForm:FormGroup;
  errorMessage:string;

  constructor(private  _commonService:CommonService) { }

  ngOnInit(): void {

    this.signUpForm = new FormGroup({
      firstName:new FormControl('',[Validators.required]),
      lastName:new FormControl('',[Validators.required]),
      studentID:new FormControl('',[Validators.required]),
      studentAddress:new FormControl('',[Validators.required]),
      studentPassword:new FormControl('',[Validators.required]),
      studentPasswordConfirm:new FormControl('',[Validators.required]),
      studentPhone:new FormControl('',[Validators.required]),
      studentGender:new FormControl('',[Validators.required]),
      studentD0B:new FormControl('',[Validators.required]),
      studentParent:new FormControl('',[Validators.required]),

    });

  }

  signUpUser() {

    if (this.signUpForm.valid){
      let Student = {
        studentID:'',
        studentName:'',
        studentFirstName:'',
        studentLastName:'',
        studentAddress:'',
        studentPassword:'',
        studentD0B:'',
        studentGender:'',
        studentPhone:'',
        studentParent:''
      }

      Student.studentName = this.signUpForm.value['firstName'] + " " + this.signUpForm.value['lastName'];
      Student.studentFirstName = this.signUpForm.value['firstName'];
      Student.studentLastName = this.signUpForm.value['lastName'];
      Student.studentID = this.signUpForm.value['studentID'];
      Student.studentAddress = this.signUpForm.value['studentAddress'];

      if ( this.signUpForm.value['studentPassword'] == this.signUpForm.value['studentPasswordConfirm']){
        Student.studentPassword = this.signUpForm.value['studentPassword'];
      }

      Student.studentD0B = this.signUpForm.value['studentD0B'];
      Student.studentGender = this.signUpForm.value['studentGender'];
      Student.studentPhone = this.signUpForm.value['studentPhone'];
      Student.studentParent = this.signUpForm.value['studentParent'];

      console.log(Student);

      this._commonService.signUpNewUser(Student).subscribe(res =>{
        alert("SignUp Success!");
      }, error => {
        alert("SignUP Failed " + error.status);
      });
    }else {
      this._commonService.snackBarShow("Please Check Your Form")
    }

  }



  validatePassword(){
    if ( this.signUpForm.value['studentPassword'] == this.signUpForm.value['studentPasswordConfirm']){

    }
  }

}
