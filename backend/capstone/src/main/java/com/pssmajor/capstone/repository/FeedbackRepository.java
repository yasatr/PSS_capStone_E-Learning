package com.pssmajor.capstone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pssmajor.capstone.entity.Feedback;
@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Long>  {
	
	

}
