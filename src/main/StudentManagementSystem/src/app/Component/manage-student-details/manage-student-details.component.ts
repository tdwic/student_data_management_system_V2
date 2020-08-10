import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {CommonService} from "../../Services/CommonService/common.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {RemoveConfirmationComponent} from "../remove-confirmation/remove-confirmation.component";
import {UpdateStudentComponent} from "../update-student/update-student.component";
import {NewAnnouncementComponent} from "../new-announcement/new-announcement.component";
import {SignupPageComponent} from "../signup-page/signup-page.component";

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

@Component({
  selector: 'app-manage-student-details',
  templateUrl: './manage-student-details.component.html',
  styleUrls: ['./manage-student-details.component.css']
})
export class ManageStudentDetailsComponent implements OnInit {

  studentList:Student[];
  student:Student;

  displayedColumns:string[] = [
    'studentID',
    'studentName',
    'studentAddress',
    'studentPassword',
    'studentD0B',
    'studentGender',
    'studentPhone',
    'studentParent',
    'action'
  ];

  dataSource = new MatTableDataSource(this.studentList);

  constructor(private _router: Router,
              private _commonService:CommonService,
              private _matDialog:MatDialog) { }

  ngOnInit(): void {

    this.populateTable();

  }

  populateTable(){
    this._commonService.getAllStudentList().subscribe( res=>{
      this.studentList = res;
      this.dataSource = new MatTableDataSource(this.studentList);
    });
  }

  updateStudentDetails(element) {
    this.student = element;

    this._matDialog.open(UpdateStudentComponent, {
      disableClose:true,
      width:"50%",
      data:{
        studentData:this.student
      }
    }).afterClosed().subscribe( res=>{
      if (res == true){
        this.populateTable();
      }
    })

  }

  removeStudentDetails(element) {

    this.student = element;

    this._matDialog.open(RemoveConfirmationComponent,{
      disableClose:true,
      width:"25%",
    }).afterClosed().subscribe( res => {
      if (res == true){
        this._commonService.removeStudent(this.student.studentID).subscribe( res=>{
          this._commonService.snackBarShow("Student Details Removed Successfully!");
          this.populateTable();
        }, error => {
          this._commonService.snackBarShow("DB Error While Removing the record!");
        })
      }else {
        this._commonService.snackBarShow("Action Terminated by the user!");
      }
    });
  }

  newStudentForm(){
    this._matDialog.open(SignupPageComponent,{
      disableClose:true,
      width:"50%"
    }).afterClosed().subscribe( res=>{
      if (res == "true"){
        this.populateTable();
      }else {
        this._commonService.snackBarShow("Action Terminated By the User!")
      }
    })
  }

}
