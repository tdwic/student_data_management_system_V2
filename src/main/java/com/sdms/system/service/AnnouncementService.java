package com.sdms.system.service;

import com.sdms.system.model.Announcement;
import com.sdms.system.repository.AnnouncementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnnouncementService {

    @Autowired
    public AnnouncementRepository announcementRepository;

    public Announcement addNewAnnouncement(Announcement announcement){
        return announcementRepository.save(announcement);
    }

    public Announcement getAnnouncementByAnnouncementID(String announcementID){
        return announcementRepository.findByAnnouncementID(announcementID);
    }

    public void removeAnnouncementByAnnouncementID(String announcementID){
        announcementRepository.removeAnnouncementByAnnouncementID(announcementID);
    }

    public List<Announcement> getAllAnnouncements(){
        return announcementRepository.findAll();
    }

}
