package com.sdms.system.repository;

import com.sdms.system.model.Admin;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AdminRepository extends MongoRepository<Admin,String> {

    Admin findAdminByAdminID(String adminID);

}
