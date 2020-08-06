package com.sdms.system.model;




public class User {

    private String UserID;
    private String Password;

    public User() {}

    public User(String userID, String password) {
        UserID = userID;
        Password = password;
    }

    public String getUserID() {
        return UserID;
    }

    public void setUserID(String userID) {
        UserID = userID;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }
}
