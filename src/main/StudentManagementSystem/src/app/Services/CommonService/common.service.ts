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
  userName:string='User';


  _apiUrl_:string = "http://localhost:8181";

  constructor(private  _http:HttpClient,
              private  _snackBar:MatSnackBar) {

    this.userName = localStorage.getItem('name');

  }


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
  public getAllTeachers():Observable<any>{
    return this._http.get(this._apiUrl_+"/teacher");
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

  public removeTeacher(teacherID){
    return this._http.delete(this._apiUrl_+"/teacher/" + teacherID);
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

  public newMarks(Marks){
    return this._http.post<any>(this._apiUrl_+"/marks" , Marks);
  }

  public newTeacher(Teacher){
    return this._http.post<any>(this._apiUrl_+"/teacher" , Teacher);
  }

  public updateTeacher(Teacher){
    return this._http.post<any>(this._apiUrl_+"/teacher" , Teacher);
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
    localStorage.setItem('component',name);
  }

  public getCurrentComponentName(){
    return localStorage.getItem('component');;
  }
  //Current component name setters and getters

}
