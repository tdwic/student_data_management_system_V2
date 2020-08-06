package com.sdms.system.controller;

import com.sdms.system.model.Admin;
import com.sdms.system.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @RequestMapping(value = "/admin", method = RequestMethod.POST)
    public Admin registerNewAdmin(@RequestBody Admin admin){
        return adminService.regNewAdmin(admin);
    }

    @RequestMapping(value = "/admin/{adminID}", method = RequestMethod.GET)
    public Admin registerNewAdmin(@PathVariable String  adminID){
        return adminService.findUserByUserName(adminID);
    }


}
