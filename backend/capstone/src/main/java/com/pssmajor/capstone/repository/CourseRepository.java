package com.pssmajor.capstone.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pssmajor.capstone.entity.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {

}
