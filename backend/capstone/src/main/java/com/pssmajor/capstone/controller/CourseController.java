package com.pssmajor.capstone.controller;

import java.io.Console;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pssmajor.capstone.entity.Course;
import com.pssmajor.capstone.model.CourseModel;
import com.pssmajor.capstone.service.CourseService;

import jakarta.transaction.Status;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class CourseController {
	
	@Autowired
	private CourseService courseService;
	
	@GetMapping("/allCourse")
	public List<Course> getAllCourse(){
		return courseService.getAllCourse();
	}
	
	@PostMapping("/addCourse")
	public Course addCourse(@RequestParam("userId") Long userId, @RequestBody CourseModel courseModel) {
		System.out.println("main andar hun");
		Course course = courseService.addCourse(userId, courseModel);
		System.out.println(course);
		return course;
	}
	
	@PutMapping("/updateCourse")
	public String updateCourse(@PathVariable("id") Long courseId, @RequestBody CourseModel courseModel) {
		courseService.updateCourse(courseId,courseModel);
		return "Updated";
	}
	
	 @GetMapping("/myCourse") 
	 public List<Course> getMyCourse(@RequestParam("userId") Long userId) throws Exception {
		 try {
				 return courseService.getMyCourse(userId); 			 
		 }
		 catch (Exception e) {
			System.out.println(e);
			return null;
		}
	}
	
}
