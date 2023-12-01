package com.pssmajor.capstone.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pssmajor.capstone.entity.Enrollment;
import com.pssmajor.capstone.model.EnrollmentModel;
import com.pssmajor.capstone.service.EnrollmentService;

@RestController
public class EnrollmentController {
	
	@Autowired
	private EnrollmentService enrollmentService;
	
	@PostMapping("/addEnrollment")
	public Enrollment addEnrollment(@RequestParam("userId") Long userId, @RequestParam("courseId") Long courseId) {
		Enrollment enrollment = enrollmentService.addEnrollment(userId, courseId);
		return enrollment;
	}
	
	
}
