package com.sdms.system.repository;

import com.sdms.system.model.Teacher;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeacherRepository extends MongoRepository<Teacher,String> {
    Teacher findByTeacherID(String teacherID);
}
