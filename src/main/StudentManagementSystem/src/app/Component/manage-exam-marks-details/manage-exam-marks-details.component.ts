import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {CommonService} from "../../Services/CommonService/common.service";
import {MatDialog} from "@angular/material/dialog";
import {InsertExamMarksComponent} from "../insert-exam-marks/insert-exam-marks.component";
import {RemoveConfirmationComponent} from "../remove-confirmation/remove-confirmation.component";
import {UpdateMarkDetailsComponent} from "../update-mark-details/update-mark-details.component";

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
  selector: 'app-manage-exam-marks-details',
  templateUrl: './manage-exam-marks-details.component.html',
  styleUrls: ['./manage-exam-marks-details.component.css']
})
export class ManageExamMarksDetailsComponent implements OnInit {

  studentMarksList:StudentMarks[];

  studentMarks:StudentMarks;

  displayedColumns:string[] = ['studentID','firstTermMarks','secondTermMarks','thirdTermMarks','firstTermNote','secondTermNote','thirdTermNote','action'];
  dataSource = new MatTableDataSource(this.studentMarksList);

  constructor(private _commonService : CommonService,
              private _matDialog:MatDialog) { }

  ngOnInit(): void {

    this.populateTable();

  }

  addMarksFroStudent() {
    this._matDialog.open(InsertExamMarksComponent,{
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

  populateTable(){
    this._commonService.getAllStudentMarks().subscribe( res => {
      this.studentMarksList = res;
      this.dataSource = new MatTableDataSource<StudentMarks>(this.studentMarksList);
    })
  }

  updateMarks(element) {

    this.studentMarks = element;

    this._matDialog.open(UpdateMarkDetailsComponent,{
      disableClose:true,
      width:"50%",
      data:{
        marksDetails:this.studentMarks
      }
    })
  }

  removeMarks(element) {

    this.studentMarks = element;

    this._matDialog.open(RemoveConfirmationComponent,{
      disableClose:true,
      width:"25%",
    }).afterClosed().subscribe( res => {
      if (res == true){
        this._commonService.removeMarks(this.studentMarks.recordID).subscribe( res=>{
          this._commonService.snackBarShow("Marks Details Removed Successfully!");
          this.populateTable();
        }, error => {
          this._commonService.snackBarShow("DB Error While Removing the record!");
        })
      }else {
        this._commonService.snackBarShow("Action Terminated by the user!");
      }
    })
  }
}
