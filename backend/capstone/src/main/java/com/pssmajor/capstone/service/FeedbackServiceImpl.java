package com.pssmajor.capstone.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pssmajor.capstone.entity.Course;
import com.pssmajor.capstone.entity.Feedback;
import com.pssmajor.capstone.entity.User;
import com.pssmajor.capstone.model.FeedbackModel;
import com.pssmajor.capstone.repository.CourseRepository;
import com.pssmajor.capstone.repository.FeedbackRepository;
import com.pssmajor.capstone.repository.UserRepository;
@Service
public class FeedbackServiceImpl implements FeedbackService{
	
	@Autowired
	private FeedbackRepository feedbackRepository;
	@Autowired
	private CourseRepository coureRepository;
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public List<Feedback> getAllFeedbacks(){
		return feedbackRepository.findAll();
	}
	
	@Override
	public Feedback saveFeedback(FeedbackModel feedback) {
		Feedback fb = new Feedback();
		Course course = coureRepository.findById(feedback.getCourseId()).get();
		User user = userRepository.findById(feedback.getUserId()).get();
		
		fb.setUserId(user);
		fb.setCourseId(course);
		fb.setFeedbackDesc(feedback.getFeedbackDesc());
		
		return feedbackRepository.save(fb);
		
	}
	
	@Override
	public void deleteFeedbackById(Long feedbackId) {
		feedbackRepository.deleteById(feedbackId);
	}

}
