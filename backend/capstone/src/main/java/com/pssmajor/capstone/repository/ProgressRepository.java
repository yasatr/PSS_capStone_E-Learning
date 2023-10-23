package com.pssmajor.capstone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pssmajor.capstone.entity.Course;
import com.pssmajor.capstone.entity.Progress;
@Repository
public interface ProgressRepository extends JpaRepository<Progress, Long>{

	Progress findById(Course course);

	

}
