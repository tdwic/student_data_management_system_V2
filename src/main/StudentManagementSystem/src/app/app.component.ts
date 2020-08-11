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

  componentName:string='Dashboard';

  constructor(private _authService:AuthService,
              private  _commonService:CommonService) {
    this.uName = localStorage.getItem('name');
  }



  logOutUser(){
    this._authService.logOutUser();
  }


  getNoOfNotifications(){
    return this._commonService.getNotificationNumber();
  }

  toggleLogOutButton(){
    return this._authService.loggedInUser();
  }

  toggleTeacherPanel(){
    return this._authService.teacherLogged();
  }

  toggleAdminPanel(){
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
