import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CommonService} from "../../Services/CommonService/common.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

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
  selector: 'app-new-teacher',
  templateUrl: './new-teacher.component.html',
  styleUrls: ['./new-teacher.component.css']
})
export class NewTeacherComponent implements OnInit {

  signUpForm:FormGroup;
  teacher:Teacher;

  constructor(private  _commonService:CommonService,
              private dialogRef : MatDialogRef<NewTeacherComponent>) { }

  ngOnInit(): void {

    this.signUpForm = new FormGroup({
      teacherID:new FormControl('',[Validators.required]),
      teacherName:new FormControl('',[Validators.required]),
      teacherGender:new FormControl('',[Validators.required]),
      teacherEmail:new FormControl('',[Validators.required]),
      teacherPassword:new FormControl('',[Validators.required]),
      teacherPasswordConfirm:new FormControl('',[Validators.required]),
      teacherContactNO:new FormControl('',[Validators.required])
    });

  }

  signUpTeacher() {

    if (this.signUpForm.valid){
      if (this.signUpForm.controls['teacherPassword'].value == this.signUpForm.controls['teacherPasswordConfirm'].value){
        this.teacher = this.signUpForm.value;
        this._commonService.newTeacher(this.teacher).subscribe( res =>{
          this._commonService.snackBarShow("Teacher added successfully!");
          this.dialogRef.close("true");
        }, error => {
          this.dialogRef.close("true");
        });

      }else {
        this._commonService.snackBarShow("Passwords are not matching!");
      }
    }else {
      this._commonService.snackBarShow("Please Check Your Form");
    }

  }
}
