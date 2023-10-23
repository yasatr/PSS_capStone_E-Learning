package com.pssmajor.capstone.service;

//import com.pssmajor.capstone.entity.Course;
import com.pssmajor.capstone.entity.Progress;

public interface ProgressService {

	Progress getProgressById(Long courseId);

}
