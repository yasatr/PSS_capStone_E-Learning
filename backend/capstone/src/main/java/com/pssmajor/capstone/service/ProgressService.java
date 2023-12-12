package com.pssmajor.capstone.service;

//import com.pssmajor.capstone.entity.Course;
import com.pssmajor.capstone.entity.Progress;
import com.pssmajor.capstone.model.ProgressModel;

public interface ProgressService {

	//Progress getProgressByCourseIdAndUserId(Long courseId, Long userId);
	Boolean getStatusbyEnrollmentId(Long courseId);
	
	Progress addProgress(Long userId, Long courseId);

	void updateStatus(Long userId, Long courseId);
		

}
