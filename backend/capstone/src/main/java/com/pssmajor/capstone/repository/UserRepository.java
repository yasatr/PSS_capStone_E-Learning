package com.pssmajor.capstone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pssmajor.capstone.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {

	User findByEmail(String email);
	
}
