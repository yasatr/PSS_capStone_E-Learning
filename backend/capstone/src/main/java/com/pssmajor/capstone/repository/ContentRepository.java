package com.pssmajor.capstone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pssmajor.capstone.entity.Content;

@Repository
public interface ContentRepository extends JpaRepository<Content, Long> {
	
}
