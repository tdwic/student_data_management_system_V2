package com.sdms.system.repository;

import com.sdms.system.model.Student;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends MongoRepository<Student, String> {

    Student findByStudentID(String studentID);

    public void removeStudentByStudentID(String studentID);

}
