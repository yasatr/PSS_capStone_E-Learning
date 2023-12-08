package com.pssmajor.capstone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pssmajor.capstone.entity.Feedback;
import com.pssmajor.capstone.model.ApiResponse;
import com.pssmajor.capstone.model.FeedbackModel;
import com.pssmajor.capstone.service.FeedbackService;

@RestController
public class FeedbackController {
	@Autowired
	private FeedbackService feedbackService;
	
//	@GetMapping("/feedback")
//	public List<Feedback> getAllFeedbacks(){
//		return feedbackService.getAllFeedbacks();
//	}
	
	@GetMapping("/feedback")
	public List<Feedback> getFeedbackByCourse(@RequestParam("courseId") Long courseId){
		return feedbackService.getFeedbackByCourse(courseId);
	}
	
	@GetMapping("/feedbackTop")
	public List<Feedback> getFeedbackByRating(@RequestParam("userId") Long userId){
		return feedbackService.getFeedbackByRating(userId);
	}
	
	@PostMapping("/feedback")
	public ResponseEntity<ApiResponse> saveFeedback(@RequestBody FeedbackModel feedback) {
		String str = feedbackService.saveFeedback(feedback);
		if(str.equals("Feedback Successfully Saved!")) {
			return new ResponseEntity<ApiResponse>(new ApiResponse(true, str, null), HttpStatus.OK);			
		}
		return new ResponseEntity<ApiResponse>(new ApiResponse(false, str, null), HttpStatus.BAD_REQUEST);
	}
	@DeleteMapping("/feedback/{id}")
	public String deleteFeedbackById(@PathVariable("id") Long feedbackId) {
		feedbackService.deleteFeedbackById(feedbackId);
		return "Feedback deleted successfully";
		
	}

}
