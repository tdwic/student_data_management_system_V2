import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CommonService} from "../../Services/CommonService/common.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

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

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  studentDetails:Student;
  UpdatedStudentDetails:Student;

  studentDetailsForm:FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any ,
              private  _commonService:CommonService) {
    this.studentDetails = data.studentData;
    this.UpdatedStudentDetails = data.studentData;
  }

  ngOnInit(): void {



    this.studentDetailsForm = new FormGroup({
      firstName:new FormControl(this.studentDetails.studentFirstName,[Validators.required]),
      lastName:new FormControl(this.studentDetails.studentLastName,[Validators.required]),
      studentID:new FormControl(this.studentDetails.studentID,[Validators.required]),
      studentAddress:new FormControl(this.studentDetails.studentAddress,[Validators.required]),
      studentPassword:new FormControl(this.studentDetails.studentPassword,[Validators.required]),
      studentPasswordConfirm:new FormControl(this.studentDetails.studentPassword,[Validators.required]),
      studentPhone:new FormControl(this.studentDetails.studentPhone,[Validators.required]),
      studentGender:new FormControl(this.studentDetails.studentGender,[Validators.required]),
      studentD0B:new FormControl(this.studentDetails.studentD0B,[Validators.required]),
      studentParent:new FormControl(this.studentDetails.studentParent,[Validators.required]),

    });


  }

  updateStudentDetails(){

    if (this.studentDetailsForm.valid){

      this.UpdatedStudentDetails.studentName = this.studentDetailsForm.value['firstName'] + " " + this.studentDetailsForm.value['lastName'];

      this.UpdatedStudentDetails.studentFirstName = this.studentDetailsForm.value['firstName'];
      this.UpdatedStudentDetails.studentLastName = this.studentDetailsForm.value['lastName'];
      this.UpdatedStudentDetails.studentID = this.studentDetailsForm.value['studentID'];
      this.UpdatedStudentDetails.studentAddress = this.studentDetailsForm.value['studentAddress'];

      this.UpdatedStudentDetails.studentPhone = this.studentDetailsForm.value['studentPhone'];
      this.UpdatedStudentDetails.studentGender = this.studentDetailsForm.value['studentGender'];
      this.UpdatedStudentDetails.studentD0B = this.studentDetailsForm.value['studentD0B'];
      this.UpdatedStudentDetails.studentParent = this.studentDetailsForm.value['studentParent'];

      if ( this.studentDetailsForm.value['studentPassword'] == this.studentDetailsForm.value['studentPasswordConfirm']){
        this.UpdatedStudentDetails.studentPassword = this.studentDetailsForm.value['studentPassword'];

        console.log(this.UpdatedStudentDetails);

        this._commonService.signUpNewUser(this.UpdatedStudentDetails).subscribe(res =>{
          this._commonService.snackBarShow("Details Updated Successfully!");
        }, error => {
          this._commonService.snackBarShow("DB Error While updating!");
        })
      }else {
        this._commonService.snackBarShow("Password Not Matching! Check your password");
      }

    }

  }


}
