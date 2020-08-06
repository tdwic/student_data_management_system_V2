package com.sdms.system.service;

import com.sdms.system.model.Marks;
import com.sdms.system.repository.MarksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MarksService {

    @Autowired
    private MarksRepository marksRepository;

    public Marks addNewMark(Marks marks){
        return marksRepository.save(marks);
    }

    public List<Marks> findMarksByStudentID(String studentID){
        return marksRepository.findMarksByStudentID(studentID);
    }

}
