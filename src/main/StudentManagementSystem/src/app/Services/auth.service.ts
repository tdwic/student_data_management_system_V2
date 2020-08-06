import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  adminRoleEncryptCodeNumber:string = '<<#$12"3"45$#-12%123>>';
  studentRoleEncryptCodeNumber:string = '<<FF#$123ER32??@#DDW>>';
  teacherRoleEncryptCodeNumber:string = '<<3@32$23A@#45GR12SS>>';


  constructor() { }

  loggedInUser(){
    return !! localStorage.getItem('token')
  }

  adminLogged(){
    return !! (localStorage.getItem('role') == this.adminRoleEncryptCodeNumber);
  }

  teacherLogged(){
    return !! (localStorage.getItem('role') == this.teacherRoleEncryptCodeNumber);
  }

}
