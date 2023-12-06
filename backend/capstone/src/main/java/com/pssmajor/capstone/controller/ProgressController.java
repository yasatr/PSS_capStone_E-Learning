package com.pssmajor.capstone.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

//import com.pssmajor.capstone.entity.Course;
import com.pssmajor.capstone.entity.Progress;
import com.pssmajor.capstone.service.ProgressService;

@RestController
public class ProgressController {
	
	@Autowired
	private ProgressService progressService;
	
	/*@GetMapping("/progress")
	public Progress getProgressById(@RequestParam Long courseId, @RequestParam Long userId) {
		return progressService.getProgressByCourseIdAndUserId(courseId, userId);
	}*/
	
	
}
