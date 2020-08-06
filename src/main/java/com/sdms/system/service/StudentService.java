package com.sdms.system.service;

import com.sdms.system.model.Student;
import com.sdms.system.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public Student regNewStudent(Student student){
        return studentRepository.save(student);
    }

    public Student findUserByUserName(String studentID){
        return studentRepository.findByStudentID(studentID);
    }

    public void removeStudentByStudentID(String studentID){
        studentRepository.removeStudentByStudentID(studentID);
    }

    public List<Student> getAllUsers(){
        return studentRepository.findAll();
    }


}
