import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {CommonService} from "../../Services/CommonService/common.service";
import {MatDialog} from "@angular/material/dialog";
import {RemoveConfirmationComponent} from "../remove-confirmation/remove-confirmation.component";
import {InsertExamMarksComponent} from "../insert-exam-marks/insert-exam-marks.component";
import {NewTeacherComponent} from "../new-teacher/new-teacher.component";
import {UpdateMarkDetailsComponent} from "../update-mark-details/update-mark-details.component";
import {UpdateTeacherComponent} from "../update-teacher/update-teacher.component";

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
  selector: 'app-manage-teacher-details',
  templateUrl: './manage-teacher-details.component.html',
  styleUrls: ['./manage-teacher-details.component.css']
})
export class ManageTeacherDetailsComponent implements OnInit {

  teacherList:Teacher[];
  teacher:Teacher;

  dataSource = new MatTableDataSource(this.teacherList);
  displayedColumns:string[] = [ 'teacherID',
                                'teacherName',
                                'teacherPassword',
                                'teacherGender',
                                'teacherEmail',
                                'teacherContactNO',
                                'action'];

  constructor(private _commonService : CommonService,
              private _matDialog:MatDialog) { }

  ngOnInit(): void {

    this.populateTable();

  }

  addNewStudent() {
    this._matDialog.open(NewTeacherComponent,{
      disableClose:true,
      width:"50%",
    }).afterClosed().subscribe( res => {
      if (res == "true"){
        this.populateTable();
      }else {
        this._commonService.snackBarShow("Action Terminated By the User!")
      }
    })
  }

  updateTeacher(element) {

    this.teacher = element;

    this._matDialog.open(UpdateTeacherComponent,{
      disableClose:true,
      width:"50%",
      data:{
        teacherDetails:this.teacher
      }
    }).afterClosed().subscribe( res=> {
      if (res == "true"){
        this.populateTable();
      }else {
        this._commonService.snackBarShow("Action Terminated By the User!")
      }
    })


  }

  removeTeacher(element) {

    this.teacher = element;

    this._matDialog.open(RemoveConfirmationComponent,{
      disableClose:true,
      width:"25%",
    }).afterClosed().subscribe( res => {
      if (res == true){
        this._commonService.removeTeacher(this.teacher.teacherID).subscribe( res =>{
          this._commonService.snackBarShow("Teacher Removed Successfully!");
          this.populateTable();
        }, error => {
          this._commonService.snackBarShow("DB error while removing!");
        });

      }else {
        this._commonService.snackBarShow("Action Terminated by the user!");
      }
    });
  }

  populateTable(){
    this._commonService.getAllTeachers().subscribe( res => {
      this.teacherList = res;
      this.dataSource = new MatTableDataSource<Teacher>(this.teacherList);
    })
  }

}
