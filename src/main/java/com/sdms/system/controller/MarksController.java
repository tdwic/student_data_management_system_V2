package com.sdms.system.controller;

import com.sdms.system.model.Marks;
import com.sdms.system.service.MarksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MarksController {

    @Autowired
    private MarksService marksService;

    @RequestMapping(value = "/marks", method = RequestMethod.POST)
    public Marks addNewMark(@RequestBody Marks marks){
        return marksService.addNewMark(marks);
    }

    @RequestMapping(value = "/marks/{studentID}", method = RequestMethod.GET)
    public List<Marks> addNewMark(@PathVariable String studentID){
        return marksService.findMarksByStudentID(studentID);
    }

}
