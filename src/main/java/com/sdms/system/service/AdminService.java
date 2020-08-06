package com.sdms.system.service;

import com.sdms.system.model.Admin;
import com.sdms.system.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public Admin regNewAdmin(Admin admin){
        return adminRepository.save(admin);
    }

    public Admin findUserByUserName(String adminID){
        return adminRepository.findAdminByAdminID(adminID);
    }

}
