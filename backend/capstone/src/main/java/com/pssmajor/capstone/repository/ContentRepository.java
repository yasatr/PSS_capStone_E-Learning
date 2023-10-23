package com.pssmajor.capstone.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pssmajor.capstone.entity.Content;

public interface ContentRepository extends JpaRepository<Content, Long> {
	
}