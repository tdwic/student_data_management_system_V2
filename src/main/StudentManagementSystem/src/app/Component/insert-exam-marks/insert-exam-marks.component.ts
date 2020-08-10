import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CommonService} from "../../Services/CommonService/common.service";

class Student {
  studentTokenID:string = '';
  studentID:string = '';
  studentName:string ='';
  studentFirstName:string = '';
  studentLastName:string = '';
  studentAddress:string ='';
  studentPassword:string ='';
  studentD0B:string ='';
  studentGender:string ='';
  studentPhone:string ='';
  studentParent:string ='';
}

class StudentMarks {
  recordID: string;
  studentID: string;
  firstTermMarks: string;
  secondTermMarks: string;
  thirdTermMarks: string;
  firstTermNote: string;
  secondTermNote: string;
  thirdTermNote: string;
}

@Component({
  selector: 'app-insert-exam-marks',
  templateUrl: './insert-exam-marks.component.html',
  styleUrls: ['./insert-exam-marks.component.css']
})
export class InsertExamMarksComponent implements OnInit {

  examMarksForm: FormGroup;
  studentList:Student[];
  studentMarks:StudentMarks;

  constructor(private _commonService: CommonService) { }

  ngOnInit(): void {

    this.examMarksForm = new FormGroup({
      studentID:new FormControl('', [Validators.required]),
      studentName:new FormControl('', [Validators.required]),
      firstTermMarks:new FormControl('', [Validators.required]),
      secondTermMarks:new FormControl('', [Validators.required]),
      thirdTermMarks:new FormControl('', [Validators.required]),
      firstTermNote:new FormControl('', [Validators.required]),
      secondTermNote:new FormControl('', [Validators.required]),
      thirdTermNote:new FormControl('', [Validators.required]),
    });

    this.populateDropDown();
    this.disableFormFields();

  }

  addNewMarks() {
    this.studentMarks = this.examMarksForm.value;

    this._commonService.newMarks(this.studentMarks).subscribe( res=> {
      this._commonService.snackBarShow("Marks Added Successfully!");
    },error => {
      this._commonService.snackBarShow("Error while DB adding marks");
    })

  }

  populateDropDown(){
    this._commonService.getAllStudentList().subscribe( res => {
      this.studentList = res;
    },error => {
      this._commonService.snackBarShow("Error while DB loading");
    })
  }

  disableFormFields(){
    this.examMarksForm.controls['studentName'].disable();
    this.examMarksForm.controls['firstTermMarks'].disable();
    this.examMarksForm.controls['secondTermMarks'].disable();
    this.examMarksForm.controls['thirdTermMarks'].disable();
    this.examMarksForm.controls['firstTermNote'].disable();
    this.examMarksForm.controls['secondTermNote'].disable();
    this.examMarksForm.controls['thirdTermNote'].disable();
  }

  enableFormFields(){
    this.examMarksForm.controls['firstTermMarks'].enable();
    this.examMarksForm.controls['secondTermMarks'].enable();
    this.examMarksForm.controls['thirdTermMarks'].enable();
    this.examMarksForm.controls['firstTermNote'].enable();
    this.examMarksForm.controls['secondTermNote'].enable();
    this.examMarksForm.controls['thirdTermNote'].enable();
  }

  onStudentIdSelected() {

    let studentID = this.examMarksForm.controls['studentID'].value;

    this.studentList.map( res =>{
      if (res.studentID == studentID){
        this.examMarksForm.controls['studentName'].setValue(res.studentName);
        this.enableFormFields();
      }
    });
  }
}
