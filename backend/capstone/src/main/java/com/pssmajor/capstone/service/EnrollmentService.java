package com.pssmajor.capstone.service;

import org.springframework.http.ResponseEntity;

import com.pssmajor.capstone.entity.Enrollment;
import com.pssmajor.capstone.model.EnrollmentModel;

public interface EnrollmentService {
	
	Enrollment addEnrollment(Long userId, Long courseId);
	
}
