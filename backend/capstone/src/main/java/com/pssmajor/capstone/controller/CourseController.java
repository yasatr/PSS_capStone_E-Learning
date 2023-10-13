package com.pssmajor.capstone.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.pssmajor.capstone.entity.Course;
import com.pssmajor.capstone.model.CourseModel;
import com.pssmajor.capstone.service.CourseService;

public class CourseController {
	
	@Autowired
	private CourseService courseService;
	
	@PostMapping("/addCourse")
	public Course addCourse(@RequestBody CourseModel courseModel) {
		Course course= courseService.addCourse(courseModel);
		return course;
	}
}
