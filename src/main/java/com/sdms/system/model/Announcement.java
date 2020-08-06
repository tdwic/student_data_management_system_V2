package com.sdms.system.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "announcement")
public class Announcement {
    @Id
    private String announcementTokenID;
    private String announcementID;
    private String announcementTitle;
    private String announcementContent;
    private String announcementLink;
    private String announcementTarget;

    public String getAnnouncementTokenID() {
        return announcementTokenID;
    }

    public void setAnnouncementTokenID(String announcementTokenID) {
        this.announcementTokenID = announcementTokenID;
    }

    public String getAnnouncementID() {
        return announcementID;
    }

    public void setAnnouncementID(String announcementID) {
        this.announcementID = announcementID;
    }

    public String getAnnouncementTitle() {
        return announcementTitle;
    }

    public void setAnnouncementTitle(String announcementTitle) {
        this.announcementTitle = announcementTitle;
    }

    public String getAnnouncementContent() {
        return announcementContent;
    }

    public void setAnnouncementContent(String announcementContent) {
        this.announcementContent = announcementContent;
    }

    public String getAnnouncementLink() {
        return announcementLink;
    }

    public void setAnnouncementLink(String announcementLink) {
        this.announcementLink = announcementLink;
    }

    public String getAnnouncementTarget() {
        return announcementTarget;
    }

    public void setAnnouncementTarget(String announcementTarget) {
        this.announcementTarget = announcementTarget;
    }
}
