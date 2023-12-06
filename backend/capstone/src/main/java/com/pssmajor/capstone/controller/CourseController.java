package com.pssmajor.capstone.controller;

import java.io.Console;
import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pssmajor.capstone.entity.Course;
import com.pssmajor.capstone.entity.User;
import com.pssmajor.capstone.model.ApiResponse;
import com.pssmajor.capstone.model.CourseModel;
import com.pssmajor.capstone.model.CourseResponse;
import com.pssmajor.capstone.model.UserSmallModel;
import com.pssmajor.capstone.service.CourseService;

import jakarta.transaction.Status;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CourseController {
	
	@Autowired
	private CourseService courseService;
	
	@GetMapping("/allCourse")
	public Page<Course> getAllCourse(@RequestParam(defaultValue = "0") int page, 
            @RequestParam(defaultValue = "4") int size){
		return courseService.getAllCourse(page, size);
	}
	
	@PostMapping("/addCourse")
	public ResponseEntity<ApiResponse> addCourse(@RequestParam("userId") Long userId, @RequestBody CourseModel courseModel) {
		Course course = courseService.addCourse(userId, courseModel);
		System.out.println(course);
		User u1 = course.getTeacher();
		UserSmallModel usmall = new UserSmallModel(u1.getUserId(), u1.getFirstName(), u1.getLastName(), u1.getPhoneNo(), u1.getRole());
		CourseResponse courseResponse = new CourseResponse(course.getCourseId(), course.getCourseTitle(), course.getCourseDesc(), course.getImgUrl(), usmall);
		if(course == null) {
			return new ResponseEntity<ApiResponse>(new ApiResponse(true, "Course not added", null), HttpStatus.BAD_REQUEST);
		}
		else {
			return new ResponseEntity<ApiResponse>(new ApiResponse(true, "Course added", courseResponse), HttpStatus.OK);
		}
	}
	
	@PutMapping("/updateCourse")
	public ResponseEntity<ApiResponse> updateCourse(@PathVariable("id") Long courseId, @RequestBody CourseModel courseModel) {
		courseService.updateCourse(courseId,courseModel);
		return new ResponseEntity<ApiResponse>(new ApiResponse(true, "Course Updated", null), HttpStatus.OK);
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
