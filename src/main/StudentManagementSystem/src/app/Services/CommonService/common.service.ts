import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  noOfNotifications:number=0;
  currentInComponentName:string = "Dashboard";
  tempLocation:string[] = [];

  _apiUrl_:string = "http://localhost:8181";

  constructor(private  _http:HttpClient,
              private  _snackBar:MatSnackBar) { }


  //FindById Methods
  public authenticateStudentByStudentID(studentID):Observable<any>{
    return this._http.get<any>(this._apiUrl_+"/students/" + studentID);
  }

  public authenticateTeacherByID(teacherID):Observable<any>{
    return this._http.get<any>(this._apiUrl_+"/teacher/"+teacherID);
  }

  public authenticateAdminByAdminID(adminID):Observable<any>{
    return this._http.get<any>(this._apiUrl_+"/admin/" + adminID);
  }

  public getStudentMarks(studentID):Observable<any>{
    return this._http.get<any>(this._apiUrl_+"/marks/"+studentID);
  }
  //FindById Methods



  //FindAll Methods
  public getAllStudentList():Observable<any>{
    return this._http.get<any>(this._apiUrl_+"/students");
  }
  public getAllAnnouncements():Observable<any>{
    return this._http.get(this._apiUrl_+"/announcement");
  }
  public getAllStudentMarks():Observable<any>{
    return this._http.get(this._apiUrl_+"/marks");
  }
  //FindAll Methods




  //Delete Methods
  public removeStudent(studentID){
    return this._http.delete(this._apiUrl_+"/students/" + studentID);
  }
  public removeAnnouncement(announcementID){
    return this._http.delete(this._apiUrl_+"/announcement/" + announcementID);
  }

  public removeMarks(recordID){
    return this._http.delete(this._apiUrl_+"/marks/" + recordID);
  }

  //Delete Methods




  //Post Methods
  public signUpNewUser(Student){
    return this._http.post<any>(this._apiUrl_+"/students" , Student);
  }

  public updateAnnouncement(Announcement){
    return this._http.post<any>(this._apiUrl_+"/announcement" , Announcement);
  }

  public newAnnouncement(Announcement){
    return this._http.post<any>(this._apiUrl_+"/announcement" , Announcement);
  }
  //Post Methods



  public snackBarShow(message){
    this._snackBar.open(message,'', {
      duration: 3000,
      panelClass:['testClass'],
      horizontalPosition:'end',
      verticalPosition:'bottom'
    });
  }

  //Notification number setters and Getters
  public setNotificationNumber(number){
    this.noOfNotifications = number;
  }

  public getNotificationNumber(){
    return this.noOfNotifications;
  }
  //Notification number setters and Getters



  //Current component name setters and getters
  public setCurrentInComponentName(name){
    this.currentInComponentName = name;
  }

  public getCurrentComponentName(){
    return this.currentInComponentName;
  }
  //Current component name setters and getters

}
