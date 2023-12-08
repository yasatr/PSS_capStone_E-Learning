package com.pssmajor.capstone.repository;

import java.util.List;

import org.hibernate.sql.exec.spi.JdbcCallParameterExtractor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.pssmajor.capstone.entity.Course;
import com.pssmajor.capstone.entity.Enrollment;
import com.pssmajor.capstone.entity.User;

@Repository
public interface EnrollmentRepository extends JpaRepository<Enrollment, Long>{

	@Query(value = "select * from enrollment where user_Id = :userId", nativeQuery = true)
	Page<Enrollment> findCourseIdByUserId(@Param("userId") Long userId, Pageable pageable);
	
	@Query(value = "select * from enrollment where user_Id = :userId", nativeQuery = true)
	List<Enrollment> findCourseIdByUserId(@Param("userId") Long userId);
	
	@Query(value = "select * from enrollment where user_Id = :userId and course_Id = :courseId", nativeQuery = true)
	Enrollment findByUserIdCourseId(@Param("userId") Long userId, @Param("courseId") Long courseId);
	
	@Query(value = "select * from enrollment where course_id = :courseId", nativeQuery = true)
	List<Enrollment> getEnrolledUser(@Param("courseId") Long courseId);
}
