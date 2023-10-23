package com.pssmajor.capstone.service;

import java.io.Console;
import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pssmajor.capstone.entity.Course;
import com.pssmajor.capstone.entity.User;
import com.pssmajor.capstone.model.CourseModel;
import com.pssmajor.capstone.repository.CourseRepository;
import com.pssmajor.capstone.repository.UserRepository;

@Service
public class CourseServiceImpl implements CourseService{
	
	@Autowired
	private CourseRepository courseRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public Course addCourse(Long userId, CourseModel courseModel) {
		// TODO Auto-generated method stub
		User user = userRepository.findById(userId).get();
		System.out.println(user);
		if(user.getRole().equals("teacher")) {
			Course course=new Course();
			course.setCourseTitle(courseModel.getCourseTitle());
			course.setCourseDesc(courseModel.getCourseDesc());
			course.setStartDate(courseModel.getStartDate());
			course.setEndDate(courseModel.getEndDate());
			courseRepository.save(course);
			return course;
		}
		
		return null;
	}
	
	@Override
	public List<Course> getAllCourse() {
		// TODO Auto-generated method stub
		return courseRepository.findAll();
	}

	@Override
	public Course updateCourse(Long courseId, CourseModel courseModel) {
		// TODO Auto-generated method stub
		Course courseDb = courseRepository.findById(courseId).get();
		
		if(Objects.nonNull(courseModel.getCourseTitle()) && !"".equalsIgnoreCase(courseModel.getCourseTitle())) {
			courseDb.setCourseTitle(courseModel.getCourseTitle());
		}
		
		if(Objects.nonNull(courseModel.getCourseDesc()) && !"".equalsIgnoreCase(courseModel.getCourseDesc())) {
			courseDb.setCourseDesc(courseModel.getCourseDesc());
		}
		
		if(Objects.nonNull(courseModel.getImgUrl()) && !"".equalsIgnoreCase(courseModel.getImgUrl())) {
			courseDb.setImgUrl(courseModel.getImgUrl());
		}
		
//		if(Objects.nonNull(courseModel.getIsActive())) {
//			courseDb.setIsActive(courseModel.getIsActive());
//		}
		
		return courseRepository.save(courseDb);
	}

	/*
	 * @Override public Course getMyCourse() { // TODO Auto-generated method stub
	 * return null; }
	 */
	

}
