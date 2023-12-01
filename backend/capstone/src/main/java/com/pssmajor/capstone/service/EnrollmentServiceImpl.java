package com.pssmajor.capstone.service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException.BadRequest;

import com.pssmajor.capstone.entity.Course;
import com.pssmajor.capstone.entity.Enrollment;
import com.pssmajor.capstone.entity.User;
import com.pssmajor.capstone.model.EnrollmentModel;
import com.pssmajor.capstone.repository.CourseRepository;
import com.pssmajor.capstone.repository.EnrollmentRepository;
import com.pssmajor.capstone.repository.UserRepository;

import ch.qos.logback.core.status.Status;

@Service
public class EnrollmentServiceImpl implements EnrollmentService {

	@Autowired
	private EnrollmentRepository enrollmentRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private CourseRepository courseRepository;

	@Override
	public Enrollment addEnrollment(Long userId, Long courseId) {
		// TODO Auto-generated method stub
		
		User user = userRepository.findById(userId).get();
		Course course = courseRepository.findById(courseId).get();
		if(user.getRole().equals("student") && course.getIsActive()) {
			Enrollment enrollment = new Enrollment();
			enrollment.setCourse(course);
			enrollment.setUser(user);
			enrollmentRepository.save(enrollment);
		}
		
		return null;
	}

	
	
	

}
