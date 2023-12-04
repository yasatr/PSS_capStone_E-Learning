package com.pssmajor.capstone.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.pssmajor.capstone.entity.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
	@Query(value = "select * from course where user_id = :userId", nativeQuery = true)
	List<Course> findCourseByTeacher(@Param("userId") Long userId);
	
	Page<Course> findAll(Pageable pageable);
}
