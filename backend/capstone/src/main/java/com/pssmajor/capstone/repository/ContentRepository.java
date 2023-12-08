package com.pssmajor.capstone.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.pssmajor.capstone.entity.Content;

@Repository
public interface ContentRepository extends JpaRepository<Content, Long> {
	
	@Query(value = "select * from content where course_Id = :courseId", nativeQuery = true)
	List<Content> getContentByCourseId(@Param("courseId") Long courseId);
}
