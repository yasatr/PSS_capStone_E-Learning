package com.pssmajor.capstone.service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.naming.ldap.PagedResultsResponseControl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException.BadRequest;

import com.pssmajor.capstone.entity.Course;
import com.pssmajor.capstone.entity.Enrollment;
import com.pssmajor.capstone.entity.Progress;
import com.pssmajor.capstone.entity.User;
import com.pssmajor.capstone.model.EnrollmentModel;
import com.pssmajor.capstone.repository.CourseRepository;
import com.pssmajor.capstone.repository.EnrollmentRepository;
import com.pssmajor.capstone.repository.ProgressRepository;
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
	
	@Autowired
	private ProgressRepository progressRepository;
	
	@Autowired
	private ProgressService progressService;

	@Override
	public Enrollment addEnrollment(Long userId, Long courseId) {
		// TODO Auto-generated method stub
		
		User user = userRepository.findById(userId).get();
		Course course = courseRepository.findById(courseId).get();
		if(user.getRole().toLowerCase().equals("student") && course.getIsActive()) {
			if(enrollmentRepository.findByUserIdCourseId(userId, courseId) == null) {
				Enrollment enrollment = new Enrollment();
				enrollment.setCourse(course);
				enrollment.setUser(user);
				enrollmentRepository.save(enrollment);
				progressService.addProgress(userId, courseId);
			}
			else {
				return null;
			}
		}
		return null;
	}

	@Override
	public List<Course> enrolledProgress(Long userId) {
	    List<Course> courseListProgress = new ArrayList<Course>();
	    try {
	        List<Enrollment> enrollmentList = enrollmentRepository.findCourseIdByUserId(userId);
	        if(enrollmentList == null)
	        	throw new Exception("No courses enrolled by this user");
	        for (Enrollment enrollment : enrollmentList) {
	            if(progressRepository.getStatusbyEnrollmentId(enrollment.getEnrollmentId()) == false) {
	                courseListProgress.add(enrollment.getCourse());
	            }
	        }
	    } catch (Exception e) {
	        System.out.println("An error occurred: " + e.getMessage());
	        e.printStackTrace();
	    }
	    return courseListProgress;
	}

	@Override
	public List<Course> enrolledCompleted(Long userId) {
	    List<Course> courseListCompleted = new ArrayList<Course>();
	    try {
	        List<Enrollment> enrollmentList = enrollmentRepository.findCourseIdByUserId(userId);
	        if(enrollmentList == null)
	        	throw new Exception("No courses enrolled by this user");
	        for (Enrollment enrollment : enrollmentList) {
	            if(progressRepository.getStatusbyEnrollmentId(enrollment.getEnrollmentId())) {
	                courseListCompleted.add(enrollment.getCourse());
	            }
	        }
	    } catch (Exception e) {
	        System.out.println("An error occurred: " + e.getMessage());
	        e.printStackTrace();
	    }
	    return courseListCompleted;
	}

	@Override
	public Page<Course> enrolledCourses(Long userId, int page, int size) {
	    Pageable pageable = PageRequest.of(page, size);
	    List<Course> courseList = new ArrayList<Course>();
	    Page<Enrollment> enrollmentList;
	    try {
	        enrollmentList = enrollmentRepository.findCourseIdByUserId(userId, pageable);
	        for (Enrollment enrollment : enrollmentList) {
	            courseList.add(enrollment.getCourse());
	        }
	    } catch (Exception e) {
	        System.out.println("An error occurred: " + e.getMessage());
	        e.printStackTrace();
	        return new PageImpl<>(courseList, pageable, 0);
	    }
	    return new PageImpl<>(courseList, pageable, enrollmentList.getTotalElements());
	}
	
	
	
	
	
	
	
	
	
	

}
