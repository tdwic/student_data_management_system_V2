import { Component, OnInit } from '@angular/core';
import {FormControl, FormControlName, FormGroup, Validators} from "@angular/forms";
import {CommonService} from "../../Services/CommonService/common.service";

class Announcement {
  announcementID:string ='';
  announcementTitle:string ='';
  announcementContent:string ='';
  announcementLink:string ='';
  announcementTarget:string ='';
}


@Component({
  selector: 'app-new-announcement',
  templateUrl: './new-announcement.component.html',
  styleUrls: ['./new-announcement.component.css']
})
export class NewAnnouncementComponent implements OnInit {

  newAnnouncementForm: FormGroup;
  newAnnouncement:Announcement;


  constructor(private _commonService:CommonService) { }

  ngOnInit(): void {

    this.newAnnouncementForm = new FormGroup({
      announcementID:new FormControl('',[Validators.required]),
      announcementTitle:new FormControl('',[Validators.required]),
      announcementContent:new FormControl('',[Validators.required]),
      announcementLink:new FormControl('',[Validators.required]),
      announcementTarget:new FormControl('',[Validators.required]),
    });

  }

  newAnnouncementSubmit() {

    if (this.newAnnouncementForm.valid){
      this.newAnnouncement= this.newAnnouncementForm.value;

      this._commonService.newAnnouncement(this.newAnnouncement).subscribe( res=> {
        this._commonService.snackBarShow("Announcement Published Successfully!");
      },error => {
        this._commonService.snackBarShow("DB error while publishing!");
      });

    }else{
      this._commonService.snackBarShow("Please Check Your Form!")
    }

  }
}
