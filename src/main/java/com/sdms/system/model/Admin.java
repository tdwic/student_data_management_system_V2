package com.sdms.system.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "admin")
public class Admin{

    @Id
    private String adminTokenID;
    private String adminID;
    private String password;

    public String getAdminTokenID() {
        return adminTokenID;
    }

    public void setAdminTokenID(String adminTokenID) {
        this.adminTokenID = adminTokenID;
    }

    public String getAdminID() {
        return adminID;
    }

    public void setAdminID(String adminID) {
        this.adminID = adminID;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
