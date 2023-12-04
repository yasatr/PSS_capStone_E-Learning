package com.pssmajor.capstone.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.pssmajor.capstone.entity.Course;
import com.pssmajor.capstone.model.CourseModel;

public interface CourseService {

	Course addCourse(Long userId, CourseModel courseModel);

	Page<Course> getAllCourse(int Page, int Size);

	Course updateCourse(Long courseId, CourseModel courseModel);

	List<Course> getMyCourse(Long userId);

}
