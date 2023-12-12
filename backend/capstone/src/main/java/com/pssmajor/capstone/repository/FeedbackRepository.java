package com.pssmajor.capstone.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.pssmajor.capstone.entity.Feedback;
@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Long>  {
	
	@Query(value = "select * from feedback where enrollment_id = :enrollmentId", nativeQuery = true)
	Feedback getFeedbackByEnrollment(@Param("enrollmentId") Long enrollmentId);
	
	@Query(value = "select * from feedback where enrollment_id in (select enrollment_id from enrollment e join course c on c.course_id = e.course_id where c.user_id = :userId)", nativeQuery = true)
	List<Feedback> findTopByRating(@Param("userId") Long userId);
}
