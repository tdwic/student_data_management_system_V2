import { Component, OnInit } from '@angular/core';
import {CommonService} from "../../Services/CommonService/common.service";

class Announcement {
  announcementID:string;
  announcementTitle:string;
  announcementContent:string;
  announcementLink:string;
  announcementTarget:string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private _commonService:CommonService) { }

  newAnnouncemnt:Announcement[];

  roleTypeAdmin:string = '<<#$12"3"45$#-12%123>>';
  roleTypeTeacher:string = '<<3@32$23A@#45GR12SS>>';

  loggedUserType:string;

  ngOnInit(): void {
    this.loggedUserType = localStorage.getItem('role');
    this.fetchNoticeDetails();
  }

  fetchNoticeDetails(){
    this._commonService.getAllAnnouncements().subscribe(res => {
      this.newAnnouncemnt = res;

      if (this.loggedUserType === this.roleTypeAdmin || this.loggedUserType === this.roleTypeTeacher ){
        this.newAnnouncemnt = this.newAnnouncemnt.filter( function (announcement){
          return announcement.announcementTarget === "all";
        });
      }

      //this._commonService.setNotificationNumber(this.newAnnouncemnt.length);
    },error => {
      this._commonService.snackBarShow("Error while loading data");
    });
  }


}
