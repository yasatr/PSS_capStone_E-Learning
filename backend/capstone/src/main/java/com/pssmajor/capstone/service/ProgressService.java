package com.pssmajor.capstone.service;

//import com.pssmajor.capstone.entity.Course;
import com.pssmajor.capstone.entity.Progress;

public interface ProgressService {

	Progress getProgressByCourseIdAndUserId(Long courseId, Long userId);
	Boolean getStatusbyCourseId(Long courseId);
	

}
