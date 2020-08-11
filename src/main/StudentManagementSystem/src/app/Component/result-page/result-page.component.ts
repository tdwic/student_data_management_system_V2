import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
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

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  studentMarksList:StudentMarks[];
  displayedColumns:string[] = ['studentID','firstTermMarks','secondTermMarks','thirdTermMarks','firstTermNote','secondTermNote','thirdTermNote'];
  dataSource = new MatTableDataSource(this.studentMarksList);

  constructor(private _commonService : CommonService) { }

  ngOnInit(): void {
    this.populateTable();
  }

  populateTable(){

    let studentID = localStorage.getItem('studentID');

    this._commonService.getStudentMarks(studentID).subscribe( res => {
      this.studentMarksList = res;
      this.dataSource = new MatTableDataSource<StudentMarks>(this.studentMarksList);
    })
  }

}
