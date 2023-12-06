package com.pssmajor.capstone.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pssmajor.capstone.entity.Course;
import com.pssmajor.capstone.entity.Enrollment;
import com.pssmajor.capstone.entity.Progress;
import com.pssmajor.capstone.repository.CourseRepository;
import com.pssmajor.capstone.repository.EnrollmentRepository;
import com.pssmajor.capstone.repository.ProgressRepository;
//import com.pssmajor.capstone.repository.UserRepository;
@Service
public class ProgressServiceImpl implements ProgressService{
	@Autowired
	private ProgressRepository progressRepository;
	@Autowired
	private CourseRepository courseRepository;
	
	@Autowired
	private EnrollmentRepository enrollmentRepository;

//	@Override
//	public Progress getProgressByCourseIdAndUserId(Long courseId, Long userId) {
//		// TODO Auto-generated method stub
//		return progressRepository.getProgressByCourseIdAndUserId(courseId, userId);
//	}

	@Override
	public Boolean getStatusbyEnrollmentId(Long enrollmentId) {
		// TODO Auto-generated method stub
		Boolean status = progressRepository.getStatusbyEnrollmentId(enrollmentId);
		return status;
	}

	@Override
	public Progress addProgress(Long userId, Long courseId) {
		// TODO Auto-generated method stub
		Enrollment enrollment = enrollmentRepository.findByUserIdCourseId(userId, courseId);
		Progress progress = new Progress();
		progress.setEnrollment(enrollment);
		return progressRepository.save(progress);
	}
	
	
	
}
