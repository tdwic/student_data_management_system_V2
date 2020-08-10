import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";
import {CommonService} from "../../Services/CommonService/common.service";
import {MatDialog} from "@angular/material/dialog";
import {RemoveConfirmationComponent} from "../remove-confirmation/remove-confirmation.component";
import {UpdateAnnouncementDetailsComponent} from "../update-announcement-details/update-announcement-details.component";
import {NewAnnouncementComponent} from "../new-announcement/new-announcement.component";

class Announcement {
  announcementTokenID:string ='';
  announcementID:string ='';
  announcementTitle:string ='';
  announcementContent:string ='';
  announcementLink:string ='';
  announcementTarget:string ='';
}

@Component({
  selector: 'app-manage-announcement-details',
  templateUrl: './manage-announcement-details.component.html',
  styleUrls: ['./manage-announcement-details.component.css']
})
export class ManageAnnouncementDetailsComponent implements OnInit {

  announcementList:Announcement[];
  announcement:Announcement;

  displayedColumns:string[] = [
    'announcementID',
    'announcementTitle',
    'announcementContent',
    'announcementLink',
    'announcementTarget',
    'action'
  ];

  dataSource = new MatTableDataSource(this.announcementList);

  constructor(private _router: Router,
              private _commonService:CommonService,
              private _matDialog:MatDialog) { }

  ngOnInit(): void {
    this.populateTable();
  }

  populateTable(){
    this._commonService.getAllAnnouncements().subscribe( res => {
      this.announcementList = res;
      this.dataSource = new MatTableDataSource(this.announcementList);
    })
  }
  updateAnnouncementDetails(element: any) {
    this.announcement = element;

    this._matDialog.open(UpdateAnnouncementDetailsComponent,{
      disableClose:true,
      width:"50%",
      data:{
        announcementDetails : this.announcement
      }
    }).afterClosed().subscribe( res => {
      if (res == "true"){
        this.populateTable();
      }else {
        this._commonService.snackBarShow("Action Terminated By the User!")
      }
    })
  }

  removeAnnouncementDetails(element: any) {
    this.announcement = element;

    this._matDialog.open(RemoveConfirmationComponent,{
      disableClose:true,
      width:"25%",
    }).afterClosed().subscribe( res => {
      if (res == true){
        this._commonService.removeAnnouncement(this.announcement.announcementID).subscribe(res => {
          this._commonService.snackBarShow("Announcement Details Removed!");
          this.populateTable();
        },error => {
          this._commonService.snackBarShow("DB error");
        });
      }else {
        this._commonService.snackBarShow("Action Terminated by the user!");
      }
    })
  }

  newAnnouncement() {
    this._matDialog.open(NewAnnouncementComponent,{
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
