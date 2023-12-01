package com.pssmajor.capstone.controller;

import java.io.Console;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

@RestController
<<<<<<< HEAD
@CrossOrigin(origins = "http://localhost:3000/")
=======
@CrossOrigin(origins = "http://localhost:3000")
>>>>>>> main
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
	
	/*
	 * @GetMapping("/myCourse") public Course getMyCourse(@RequestParam("userId")
	 * Long userId,@RequestParam("role") String role) { return
	 * courseService.getMyCourse(); }
	 */
	
}
