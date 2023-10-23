package com.pssmajor.capstone.service;

import java.util.List;

import com.pssmajor.capstone.entity.Course;
import com.pssmajor.capstone.model.CourseModel;

public interface CourseService {

	Course addCourse(Long userId, CourseModel courseModel);

	List<Course> getAllCourse();

	Course updateCourse(Long courseId, CourseModel courseModel);

//	Course getMyCourse();


}
