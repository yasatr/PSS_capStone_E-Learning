package com.pssmajor.capstone.service;

import java.util.List;

import com.pssmajor.capstone.entity.Feedback;
import com.pssmajor.capstone.model.FeedbackModel;

public interface FeedbackService {
	
	List<Feedback> getAllFeedbacks();
	Feedback saveFeedback(FeedbackModel feedback);
	void deleteFeedbackById(Long feedbackId);

}
