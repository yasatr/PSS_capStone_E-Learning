package com.pssmajor.capstone.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;

import com.pssmajor.capstone.entity.Course;
import com.pssmajor.capstone.entity.Enrollment;
import com.pssmajor.capstone.model.EnrollmentModel;

public interface EnrollmentService {
	
	Enrollment addEnrollment(Long userId, Long courseId);
	
	List<Course> enrolledProgress(Long userId);
	
	List<Course> enrolledCompleted(Long userId);
	
	Page<Course> enrolledCourses(Long userId, int Page, int Size);
	

}
