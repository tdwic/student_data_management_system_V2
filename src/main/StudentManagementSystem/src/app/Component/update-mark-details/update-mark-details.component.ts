import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {CommonService} from "../../Services/CommonService/common.service";

class StudentMarks {
  recordID: string;
  studentID: string;
  studentName: string;
  firstTermMarks: string;
  secondTermMarks: string;
  thirdTermMarks: string;
  firstTermNote: string;
  secondTermNote: string;
  thirdTermNote: string;
}

class Student {
  studentTokenID: string = '';
  studentID: string = '';
  studentName: string = '';
  studentFirstName: string = '';
  studentLastName: string = '';
  studentAddress: string = '';
  studentPassword: string = '';
  studentD0B: string = '';
  studentGender: string = '';
  studentPhone: string = '';
  studentParent: string = '';
}


@Component({
  selector: 'app-update-mark-details',
  templateUrl: './update-mark-details.component.html',
  styleUrls: ['./update-mark-details.component.css']
})
export class UpdateMarkDetailsComponent implements OnInit {

  examMarksUpdateForm: FormGroup;
  studentMarks: StudentMarks;
  studentMarksUpdated: StudentMarks;
  studentList: Student[];
  studentName: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private  _commonService: CommonService) {

    this.studentMarks = data.marksDetails;
    this.studentMarksUpdated = data.marksDetails;

    console.log(this.studentMarksUpdated);

  }

  ngOnInit(): void {


    this.examMarksUpdateForm = new FormGroup({
      studentID: new FormControl(this.studentMarks.studentID, [Validators.required]),
      recordID: new FormControl(this.studentMarks.recordID, [Validators.required]),
      studentName: new FormControl(this.studentMarks.studentName, [Validators.required]),
      firstTermMarks: new FormControl(this.studentMarks.firstTermMarks, [Validators.required]),
      secondTermMarks: new FormControl(this.studentMarks.secondTermMarks, [Validators.required]),
      thirdTermMarks: new FormControl(this.studentMarks.thirdTermMarks, [Validators.required]),
      firstTermNote: new FormControl(this.studentMarks.firstTermNote, [Validators.required]),
      secondTermNote: new FormControl(this.studentMarks.secondTermNote, [Validators.required]),
      thirdTermNote: new FormControl(this.studentMarks.thirdTermNote, [Validators.required]),
    });

  }

  updateMarks() {

    if (this.examMarksUpdateForm.valid) {
      this.studentMarksUpdated = this.examMarksUpdateForm.value;
      //console.log(this.studentMarksUpdated)
      this._commonService.newMarks(this.studentMarksUpdated).subscribe(res => {
        this._commonService.snackBarShow("Marks Updated Successfully!");
      }, error => {
        this._commonService.snackBarShow("DB error while updating!");
      })

    }


  }


}
