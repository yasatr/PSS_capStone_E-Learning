package com.pssmajor.capstone.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pssmajor.capstone.entity.User;
import com.pssmajor.capstone.model.LoginModel;
import com.pssmajor.capstone.model.UserModel;
import com.pssmajor.capstone.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository userRepository;

	@Override
	public void signUp(UserModel userModel) {
		// TODO Auto-generated method stub
		User user = new User();
		user.setFirstName(userModel.getFirstName());
		user.setLastName(userModel.getLastName());
		user.setEmail(userModel.getEmail());
		user.setPhoneNo(userModel.getPhoneNo());
		user.setRole(userModel.getRole());
		user.setProfilePicUrl(userModel.getProfilePicUrl());
		if(userModel.getPassword().equals(userModel.getMatchingPass())) {
			user.setPassword(userModel.getPassword());
		}
		userRepository.save(user);
	}

	@Override
	public User login(LoginModel loginModel) {
		// TODO Auto-generated method stub
		User user = userRepository.findByEmail(loginModel.getEmail());
		if(user.getEmail().equals(loginModel.getEmail())) {
			if(user.getPassword().equals(loginModel.getPassword())) {
				return user;
			}
		}
		return null;
	}
	
	
}
