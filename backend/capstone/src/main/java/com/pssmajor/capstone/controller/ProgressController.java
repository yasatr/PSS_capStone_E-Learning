package com.pssmajor.capstone.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pssmajor.capstone.model.ApiResponse;
//import com.pssmajor.capstone.entity.Course;
import com.pssmajor.capstone.service.ProgressService;

@RestController
public class ProgressController {
	
	@Autowired
	private ProgressService progressService;
	
	/*@GetMapping("/progress")
	public Progress getProgressById(@RequestParam Long courseId, @RequestParam Long userId) {
		return progressService.getProgressByCourseIdAndUserId(courseId, userId);
	}*/
	
	 @PutMapping("/progress")
	    public ResponseEntity<ApiResponse> updateStatus(@RequestParam("userId") Long userId, @RequestParam("courseId") Long courseId){
	        progressService.updateStatus(userId, courseId);
	        return new ResponseEntity<ApiResponse>(new ApiResponse("Status Updated", true), HttpStatus.OK);
	    }
	
}
