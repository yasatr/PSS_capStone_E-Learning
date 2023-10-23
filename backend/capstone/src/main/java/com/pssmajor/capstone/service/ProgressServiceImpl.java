package com.pssmajor.capstone.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pssmajor.capstone.entity.Course;
import com.pssmajor.capstone.entity.Progress;
import com.pssmajor.capstone.repository.CourseRepository;
import com.pssmajor.capstone.repository.ProgressRepository;
//import com.pssmajor.capstone.repository.UserRepository;
@Service
public class ProgressServiceImpl implements ProgressService{
	@Autowired
	private ProgressRepository progressRepository;
	@Autowired
	private CourseRepository courseRepository;

	@Override
	public Progress getProgressById(Long courseId) {
		Course course = courseRepository.findById(courseId).get();
		return progressRepository.findById(course.getCourseId()).get();
	}
	
	
	
}
