package com.sdms.system.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "teacher")
public class Teacher {

    @Id
    private String teacherTokenID;
    private String teacherID;
    private String teacherName;
    private String teacherPassword;
    private String teacherGender;
    private String teacherEmail;
    private String teacherContactNO;

    public String getTeacherTokenID() {
        return teacherTokenID;
    }

    public void setTeacherTokenID(String teacherTokenID) {
        this.teacherTokenID = teacherTokenID;
    }

    public String getTeacherID() {
        return teacherID;
    }

    public void setTeacherID(String teacherID) {
        this.teacherID = teacherID;
    }

    public String getTeacherName() {
        return teacherName;
    }

    public void setTeacherName(String teacherName) {
        this.teacherName = teacherName;
    }

    public String getTeacherPassword() {
        return teacherPassword;
    }

    public void setTeacherPassword(String teacherPassword) {
        this.teacherPassword = teacherPassword;
    }

    public String getTeacherGender() {
        return teacherGender;
    }

    public void setTeacherGender(String teacherGender) {
        this.teacherGender = teacherGender;
    }

    public String getTeacherEmail() {
        return teacherEmail;
    }

    public void setTeacherEmail(String teacherEmail) {
        this.teacherEmail = teacherEmail;
    }

    public String getTeacherContactNO() {
        return teacherContactNO;
    }

    public void setTeacherContactNO(String teacherContactNO) {
        this.teacherContactNO = teacherContactNO;
    }
}
