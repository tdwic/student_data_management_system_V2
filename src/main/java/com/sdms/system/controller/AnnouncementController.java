package com.sdms.system.controller;

import com.sdms.system.model.Announcement;
import com.sdms.system.service.AnnouncementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AnnouncementController {

    @Autowired
    private AnnouncementService announcementService;

    @RequestMapping(value = "/announcement", method = RequestMethod.POST)
    public Announcement addNewAnnouncement(@RequestBody Announcement announcement){
        return announcementService.addNewAnnouncement(announcement);
    }

    @RequestMapping(value = "/announcement", method = RequestMethod.GET)
    public List<Announcement> getAllAnnouncement(){
        return announcementService.getAllAnnouncements();
    }

    @RequestMapping(value = "/announcement/{announcementID}", method = RequestMethod.GET)
    public Announcement getAnnouncementByAnnouncementID(@PathVariable String announcementID ){
        return announcementService.getAnnouncementByAnnouncementID(announcementID);
    }

    @RequestMapping(value = "/announcement/{announcementID}",method = RequestMethod.DELETE)
    public void removeAnnouncement(@PathVariable String announcementID){
        announcementService.removeAnnouncementByAnnouncementID(announcementID);
    }


}
