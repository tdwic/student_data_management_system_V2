package com.sdms.system.repository;

import com.sdms.system.model.Announcement;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnnouncementRepository extends MongoRepository <Announcement,String> {

    Announcement findByAnnouncementID(String announcementID);

    public void removeAnnouncementByAnnouncementID(String announcementID);

}
