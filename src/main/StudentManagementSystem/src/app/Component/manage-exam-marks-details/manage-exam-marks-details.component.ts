import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {CommonService} from "../../Services/CommonService/common.service";

class StudentResult {
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

  studentResultList:StudentResult[];

  displayedColumns:string[] = ['studentID','firstTermMarks','secondTermMarks','thirdTermMarks','firstTermNote','secondTermNote','thirdTermNote','action'];
  dataSource = new MatTableDataSource(this.studentResultList);

  constructor(private _commonService : CommonService) { }

  ngOnInit(): void {

    this.populateTable();

  }

  addMarksFroStudent() {

  }

  populateTable(){
    this._commonService.getAllStudentMarks().subscribe( res => {
      this.studentResultList = res;
      this.dataSource = new MatTableDataSource<StudentResult>(this.studentResultList);
    })
  }

  updateMarks(element) {

  }

  removeMarks(element) {

  }
}
