package com.pssmajor.capstone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pssmajor.capstone.entity.Feedback;
import com.pssmajor.capstone.model.FeedbackModel;
import com.pssmajor.capstone.service.FeedbackService;

@RestController
public class FeedbackController {
	@Autowired
	private FeedbackService feedbackService;
	
	@GetMapping("/feedback")
	public List<Feedback> getAllFeedbacks(){
		return feedbackService.getAllFeedbacks();
	}
	
	@PostMapping("/feedback")
	public Feedback saveFeedback(@RequestBody FeedbackModel feedback) {
		return feedbackService.saveFeedback(feedback);
	}
	@DeleteMapping("/feedback/{id}")
	public String deleteFeedbackById(@PathVariable("id") Long feedbackId) {
		feedbackService.deleteFeedbackById(feedbackId);
		return "Feedback deleted successfully";
		
	}

}
