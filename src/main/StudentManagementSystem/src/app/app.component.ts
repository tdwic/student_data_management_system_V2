import { Component } from '@angular/core';
import {AuthService} from "./Services/AuthService/auth.service";
import {CommonService} from "./Services/CommonService/common.service";
import {interval} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StudentManagementSystem';
  noOfNotifications:number=0;

  uName:string='user'
  uGender:string='none'

  componentName:string='Dashboard';

  constructor(private _authService:AuthService,
              private  _commonService:CommonService) {
    this.uName = localStorage.getItem('name');
  }



  logOutUser(){
    this.uName = localStorage.getItem('name');
    this._authService.logOutUser();
  }


  getNoOfNotifications(){
    this.uName = localStorage.getItem('name');
    this.uGender = localStorage.getItem('gender');
    return this._commonService.getNotificationNumber();
  }

  toggleLogOutButton(){
    this.uName = localStorage.getItem('name');
    this.uGender = localStorage.getItem('gender');
    return this._authService.loggedInUser();
  }

  toggleTeacherPanel(){
    this.uName = localStorage.getItem('name');
    this.uGender = localStorage.getItem('gender');
    return this._authService.teacherLogged();
  }

  toggleAdminPanel(){
    this.uName = localStorage.getItem('name');
    this.uGender = localStorage.getItem('gender');
    return this._authService.adminLogged();
  }

  clicked(routeName:string){
    this._commonService.tempLocation.push(routeName);

  }

  componentNameUpdate(componentName:string){
    //this._commonService.setCurrentInComponentName(componentName);
    this.componentName = componentName;
  }

  userName(){
    return this._commonService.userName;
  }

}
