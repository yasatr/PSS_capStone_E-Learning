package com.pssmajor.capstone.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pssmajor.capstone.entity.Course;
import com.pssmajor.capstone.entity.Enrollment;
import com.pssmajor.capstone.entity.Feedback;
import com.pssmajor.capstone.entity.User;
import com.pssmajor.capstone.model.FeedbackModel;
import com.pssmajor.capstone.repository.CourseRepository;
import com.pssmajor.capstone.repository.EnrollmentRepository;
import com.pssmajor.capstone.repository.FeedbackRepository;
import com.pssmajor.capstone.repository.UserRepository;
@Service
public class FeedbackServiceImpl implements FeedbackService{
	
	@Autowired
	private FeedbackRepository feedbackRepository;
	
	@Autowired
	private EnrollmentRepository enrollmentRepository;
	
	@Override
	public List<Feedback> getFeedbackByCourse(Long courseId){
		List<Enrollment> enrollList = enrollmentRepository.getEnrolledUser(courseId);
		List<Feedback> feedbackList = new ArrayList<Feedback>();
		enrollList.forEach((enrollment) -> {
			Feedback f = feedbackRepository.getFeedbackByEnrollment(enrollment.getEnrollmentId());
			feedbackList.add(f);
		});
		System.out.println(feedbackList);
		return feedbackList;
	}
	
	@Override
	public String saveFeedback(FeedbackModel feedback) {
		try {
			Feedback fb = new Feedback();
			Enrollment enroll = enrollmentRepository.findByUserIdCourseId(feedback.getUserId(), feedback.getCourseId());
			if (enroll == null) {
	            throw new Exception("Enrollment not found for the given user and course");
	        }
			fb.setFeedbackDesc(feedback.getFeedbackDesc());
			fb.setEnrollment(enroll);
			fb.setRating(feedback.getRating());
			feedbackRepository.save(fb);
			return "Feedback Successfully Saved!";
		}
		catch(Exception e) {
			return "Error Saving Feedback!" + e.getMessage();
		}
	}
	
	@Override
	public void deleteFeedbackById(Long feedbackId) {
		feedbackRepository.deleteById(feedbackId);
	}

	@Override
	public List<Feedback> getFeedbackByRating(Long userId) {
		return feedbackRepository.findTopByRating(userId);
	}

}
