package com.sdms.system.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "marks")
public class Marks {

    @Id
    private String recordID;
    private String studentID;
    private int firstTermMarks;
    private int secondTermMarks;
    private int thirdTermMarks;
    private String firstTermNote;
    private String secondTermNote;
    private String thirdTermNote;

    public String getRecordID() {
        return recordID;
    }

    public void setRecordID(String recordID) {
        this.recordID = recordID;
    }

    public String getStudentID() {
        return studentID;
    }

    public void setStudentID(String studentID) {
        this.studentID = studentID;
    }

    public int getFirstTermMarks() {
        return firstTermMarks;
    }

    public void setFirstTermMarks(int firstTermMarks) {
        this.firstTermMarks = firstTermMarks;
    }

    public int getSecondTermMarks() {
        return secondTermMarks;
    }

    public void setSecondTermMarks(int secondTermMarks) {
        this.secondTermMarks = secondTermMarks;
    }

    public int getThirdTermMarks() {
        return thirdTermMarks;
    }

    public void setThirdTermMarks(int thirdTermMarks) {
        this.thirdTermMarks = thirdTermMarks;
    }

    public String getFirstTermNote() {
        return firstTermNote;
    }

    public void setFirstTermNote(String firstTermNote) {
        this.firstTermNote = firstTermNote;
    }

    public String getSecondTermNote() {
        return secondTermNote;
    }

    public void setSecondTermNote(String secondTermNote) {
        this.secondTermNote = secondTermNote;
    }

    public String getThirdTermNote() {
        return thirdTermNote;
    }

    public void setThirdTermNote(String thirdTermNote) {
        this.thirdTermNote = thirdTermNote;
    }
}
