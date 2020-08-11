import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CommonService} from "../../Services/CommonService/common.service";

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
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent implements OnInit {

  updateForm: FormGroup;
  teacher:Teacher;


  constructor(@Inject(MAT_DIALOG_DATA) public data:any ,
              private  _commonService:CommonService,
              private dialogRef : MatDialogRef<UpdateTeacherComponent>) {
    this.teacher = data.teacherDetails;
  }

  ngOnInit(): void {

    this.updateForm = new FormGroup({
      teacherTokenID:new FormControl(this.teacher.teacherTokenID),
      teacherID:new FormControl(this.teacher.teacherID,[Validators.required]),
      teacherName:new FormControl(this.teacher.teacherName,[Validators.required]),
      teacherGender:new FormControl(this.teacher.teacherGender,[Validators.required]),
      teacherEmail:new FormControl(this.teacher.teacherEmail,[Validators.required]),
      teacherPassword:new FormControl(this.teacher.teacherPassword,[Validators.required]),
      teacherPasswordConfirm:new FormControl(this.teacher.teacherPassword,[Validators.required]),
      teacherContactNO:new FormControl(this.teacher.teacherContactNO,[Validators.required])
    });

  }

  updateTeacherDetails() {

    if (this.updateForm.valid){
      if (this.updateForm.controls['teacherPassword'].value == this.updateForm.controls['teacherPasswordConfirm'].value){
        this.teacher = this.updateForm.value;
        this._commonService.updateTeacher(this.teacher).subscribe( res =>{
          this._commonService.snackBarShow("Teacher updated successfully!");
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
