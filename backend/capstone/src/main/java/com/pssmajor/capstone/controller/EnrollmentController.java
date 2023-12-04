package com.pssmajor.capstone.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pssmajor.capstone.entity.Course;
import com.pssmajor.capstone.entity.Enrollment;
import com.pssmajor.capstone.model.EnrollmentModel;
import com.pssmajor.capstone.service.EnrollmentService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class EnrollmentController {
	
	@Autowired
	private EnrollmentService enrollmentService;
	
	@PostMapping("/addEnrollment")
	public Enrollment addEnrollment(@RequestParam("userId") Long userId, @RequestParam("courseId") Long courseId) {
		Enrollment enrollment = enrollmentService.addEnrollment(userId, courseId);
		return enrollment;
	}
	
	@GetMapping("/enrolledProgress")
	public List<Course> enrolledProgess(@RequestParam("userId") Long userId){
		return enrollmentService.enrolledProgress(userId);
	}
	
	@GetMapping("/enrolledCompleted")
	public List<Course> enrolledCompleted(@RequestParam("userId") Long userId){
		return enrollmentService.enrolledCompleted(userId);
	}
	
	@GetMapping("/enrolledCourses")
	public Page<Course> enrolledCourses(@RequestParam("userId") Long userId, @RequestParam(defaultValue = "0") int page, 
            @RequestParam(defaultValue = "2") int size){
		return enrollmentService.enrolledCourses(userId, page, size);
	}
	
}
