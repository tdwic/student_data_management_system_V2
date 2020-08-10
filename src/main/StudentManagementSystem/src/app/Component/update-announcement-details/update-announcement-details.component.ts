import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {CommonService} from "../../Services/CommonService/common.service";

class Announcement {
  announcementTokenID:string ='';
  announcementID:string ='';
  announcementTitle:string ='';
  announcementContent:string ='';
  announcementLink:string ='';
  announcementTarget:string ='';
}

@Component({
  selector: 'app-update-announcement-details',
  templateUrl: './update-announcement-details.component.html',
  styleUrls: ['./update-announcement-details.component.css']
})
export class UpdateAnnouncementDetailsComponent implements OnInit {

  updateAnnouncement : FormGroup;
  announcementDetails : Announcement;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any ,
              private  _commonService:CommonService) {
    this.announcementDetails = this.data.announcementDetails;
  }

  ngOnInit(): void {

    this.updateAnnouncement = new FormGroup({
      announcementID:new FormControl(this.announcementDetails.announcementID,[Validators.required]),
      announcementTitle:new FormControl(this.announcementDetails.announcementTitle,[Validators.required]),
      announcementContent:new FormControl(this.announcementDetails.announcementContent,[Validators.required]),
      announcementLink:new FormControl(this.announcementDetails.announcementLink,[Validators.required]),
      announcementTarget:new FormControl(this.announcementDetails.announcementTarget,[Validators.required]),
    });
    // this.updateAnnouncement.controls['announcementID'].disable();

  }

  updateAnnouncementDetails() {

    this.announcementDetails.announcementID = this.updateAnnouncement.value['announcementID'];
    this.announcementDetails.announcementTitle = this.updateAnnouncement.value['announcementTitle'];
    this.announcementDetails.announcementContent = this.updateAnnouncement.value['announcementContent'];
    this.announcementDetails.announcementLink = this.updateAnnouncement.value['announcementLink'];
    this.announcementDetails.announcementTarget = this.updateAnnouncement.value['announcementTarget'];

    console.log(this.updateAnnouncement.value['announcementID'])

    this._commonService.updateAnnouncement(this.announcementDetails).subscribe( res => {
      this._commonService.snackBarShow("Announcement Updated Successfully!");
    }, error => {
      this._commonService.snackBarShow("DB error While updating!");
    })

  }
}
