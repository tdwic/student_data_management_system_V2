import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CommonService} from "../../Services/CommonService/common.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  signUpForm:FormGroup;
  errorMessage:string;
  roleType:string = '';
  constructor(private  _commonService:CommonService,
              private  dialogRef : MatDialogRef<SignupPageComponent>) { }

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
      this.roleType = this.signUpForm.controls['studentID'].value;
      this.roleType = this.roleType.substring(0,2);
      if (this.roleType === 'ST'){
        if (this.signUpForm.controls['studentPassword'].value === this.signUpForm.controls['studentPasswordConfirm'].value){
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

          // console.log(Student);

          this._commonService.signUpNewUser(Student).subscribe(res =>{
            this._commonService.snackBarShow("Student added successfully!");
            this.dialogRef.close("true");
          }, error => {
            this.dialogRef.close("true");
          });
        }else {
          this._commonService.snackBarShow("Passwords are not matching!");
        }
      }else {
        this._commonService.snackBarShow("Student ID Must Contain the Special Letters 'ST'");
      }
    }else {
      this._commonService.snackBarShow("Please Check Your Form")
    }

  }



  validatePassword(){
    if ( this.signUpForm.value['studentPassword'] == this.signUpForm.value['studentPasswordConfirm']){

    }
  }

}
