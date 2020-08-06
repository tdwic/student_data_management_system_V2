package com.sdms.system.controller;

import com.sdms.system.model.Student;
import com.sdms.system.repository.StudentRepository;
import com.sdms.system.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private StudentService studentService;

    @RequestMapping(value = "/students",method = RequestMethod.POST)
    public Student registerNewStudent(@RequestBody Student student){
        return studentService.regNewStudent(student);
    }

    @RequestMapping(value = "/students/{studentID}",method = RequestMethod.GET)
    public Student registerNewStudent(@PathVariable String studentID){
        return studentService.findUserByUserName(studentID);
    }

    @RequestMapping(value = "/students/{studentID}",method = RequestMethod.DELETE)
    public void removeStudent(@PathVariable String studentID){
        studentService.removeStudentByStudentID(studentID);
    }

    @RequestMapping(value = "/students",method = RequestMethod.GET)
    public List<Student> getAllStudents(){
        return studentService.getAllUsers();
    }


}
