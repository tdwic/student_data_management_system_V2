package com.sdms.system.repository;

import com.sdms.system.model.Marks;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MarksRepository extends MongoRepository <Marks,String> {

    List<Marks> findMarksByStudentID(String studentID);

}
