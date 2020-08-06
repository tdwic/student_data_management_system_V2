package com.sdms.system.controller;

import com.sdms.system.model.Teacher;
import com.sdms.system.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TeacherController {

    @Autowired
    private TeacherService teacherService;

    @RequestMapping(value = "/teacher",method = RequestMethod.POST)
    public Teacher signUpTeacher(@RequestBody Teacher teacher){
        return teacherService.signUpNewTeacher(teacher);
    }

    @RequestMapping(value = "/teacher/{teacherID}", method = RequestMethod.GET)
    public Teacher findTeacherByTeacherID(@PathVariable String teacherID){
        return teacherService.findTeacherByTeacherID(teacherID);
    }

    @RequestMapping(value = "/teacher", method = RequestMethod.GET)
    public List<Teacher> findAllTeacherByTeacherID(){
        return teacherService.findAllTeacherByTeacherID();
    }

}
