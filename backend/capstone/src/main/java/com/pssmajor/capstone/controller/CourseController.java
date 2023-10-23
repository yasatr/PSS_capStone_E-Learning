package com.pssmajor.capstone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.pssmajor.capstone.entity.Course;
import com.pssmajor.capstone.model.CourseModel;
import com.pssmajor.capstone.service.CourseService;

public class CourseController {
	
	@Autowired
	private CourseService courseService;
	
	@GetMapping("/allCourse")
	public List<Course> getAllCourse(){
		return courseService.getAllCourse();
	}
	
	@PostMapping("/addCourse")
	public Course addCourse(@RequestBody CourseModel courseModel) {
		Course course= courseService.addCourse(courseModel);
		return course;
	}
	
	@PutMapping("/updateCourse")
	public String updateCourse(@PathVariable("id") Long courseId, @RequestBody CourseModel courseModel) {
		courseService.updateCourse(courseId,courseModel);
		return "Updated";
	}
	
	/*
	 * @GetMapping("/myCourse") public Course getMyCourse(@RequestParam("userId")
	 * Long userId,@RequestParam("role") String role) { return
	 * courseService.getMyCourse(); }
	 */
	
}
