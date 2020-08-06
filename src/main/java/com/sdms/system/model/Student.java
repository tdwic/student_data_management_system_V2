package com.sdms.system.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;

@Document(collection = "student")
public class Student {

    @Id
    private String studentTokenID;
    private String studentID;
    private String studentName;
    private String studentAddress;
    private String studentPassword;
    private String studentD0B;
    private String studentGender;
    private String studentPhone;
    private String studentParent;

    public String getStudentID() {
        return studentID;
    }

    public void setStudentID(String studentID) {
        this.studentID = studentID;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getStudentAddress() {
        return studentAddress;
    }

    public void setStudentAddress(String studentAddress) {
        this.studentAddress = studentAddress;
    }

    public String getStudentPassword() {
        return studentPassword;
    }

    public void setStudentPassword(String studentPassword) {
        this.studentPassword = studentPassword;
    }

    public String getStudentD0B() {
        return studentD0B;
    }

    public void setStudentD0B(String studentD0B) {
        this.studentD0B = studentD0B;
    }

    public String getStudentGender() {
        return studentGender;
    }

    public void setStudentGender(String studentGender) {
        this.studentGender = studentGender;
    }

    public String getStudentPhone() {
        return studentPhone;
    }

    public void setStudentPhone(String studentPhone) {
        this.studentPhone = studentPhone;
    }

    public String getStudentParent() {
        return studentParent;
    }

    public void setStudentParent(String studentParent) {
        this.studentParent = studentParent;
    }

    public String getStudentTokenID() {
        return studentTokenID;
    }

    public void setStudentTokenID(String studentTokenID) {
        this.studentTokenID = studentTokenID;
    }
}
