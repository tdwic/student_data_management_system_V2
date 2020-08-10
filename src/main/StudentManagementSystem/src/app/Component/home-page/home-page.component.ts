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

  ngOnInit(): void {

    this.fetchNoticeDetails();

  }

  fetchNoticeDetails(){
    this._commonService.getAllAnnouncements().subscribe(res => {
      this.newAnnouncemnt = res;
      this._commonService.setNotificationNumber(this.newAnnouncemnt.length);
    },error => {
      this._commonService.snackBarShow("Error while loading data");
    });
  }


}
