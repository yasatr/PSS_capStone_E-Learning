package com.pssmajor.capstone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.pssmajor.capstone.entity.Course;
import com.pssmajor.capstone.entity.Progress;
@Repository
public interface ProgressRepository extends JpaRepository<Progress, Long>{

	@Query(value="select * from progress where course_id = :courseId and user_id = :userId", nativeQuery = true)
	Progress getProgressByCourseIdAndUserId(@Param("courseId") Long courseId, @Param("userId") Long userId);

	@Query(value = "select status from progress where enrollment_id = :enrollmentId", nativeQuery = true)
	Boolean getStatusbyEnrollmentId(@Param("enrollmentId") Long enrollmentId);
}
