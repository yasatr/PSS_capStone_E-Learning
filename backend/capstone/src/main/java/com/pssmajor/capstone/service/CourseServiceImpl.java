package com.pssmajor.capstone.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.pssmajor.capstone.entity.Course;
import com.pssmajor.capstone.model.CourseModel;
import com.pssmajor.capstone.repository.CourseRepository;

public class CourseServiceImpl implements CourseService{
	
	@Autowired
	private CourseRepository courseRepository;
	@Override
	public Course addCourse(CourseModel courseModel) {
		// TODO Auto-generated method stub
		Course course=new Course();
		course.setCourseTitle(courseModel.getCourseTitle());
		course.setCourseDesc(course.getCourseDesc());
		course.setStartDate(courseModel.getStartDate());
		course.setEndDate(courseModel.getEndDate());
		
		courseRepository.save(course);
		return course;
	}

}
