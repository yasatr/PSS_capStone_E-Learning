package com.pssmajor.capstone.service;

import java.io.Console;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.pssmajor.capstone.entity.User;
import com.pssmajor.capstone.model.LoginModel;
import com.pssmajor.capstone.model.ProfileModel;
import com.pssmajor.capstone.model.UpdateModel;
import com.pssmajor.capstone.model.UserModel;
import com.pssmajor.capstone.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	@Override
	public String signUp(UserModel userModel) {
		// TODO Auto-generated method stub
		User user = new User();
		user.setFirstName(userModel.getFirstName());
		user.setLastName(userModel.getLastName());
		user.setEmail(userModel.getEmail());
		user.setPhoneNo(userModel.getPhoneNo());
		user.setRole(userModel.getRole().toLowerCase());
		user.setProfilePicUrl(userModel.getProfilePicUrl());
		if(userModel.getPassword().equals(userModel.getMatchingPass())) {
			user.setPassword(bCryptPasswordEncoder.encode(userModel.getPassword()));
		}
		Object temp = userRepository.save(user);
		if(temp != null) {
			return "Singup Success";
		}
		else {
			return "Signup Failed";
		}
	}

	@Override
	public User login(LoginModel loginModel) {
		// TODO Auto-generated method stub
		User user = userRepository.findByEmail(loginModel.getEmail());
		System.out.println(user);
		if(user.getEmail().equals(loginModel.getEmail())) {
			if(bCryptPasswordEncoder.matches(loginModel.getPassword(), user.getPassword())) {
				return user;
			}
		}
		return null;			
	}

	@Override
	public String forgot(LoginModel loginModel) {
		// TODO Auto-generated method stub
		User user = userRepository.findByEmail(loginModel.getEmail());
		if(user.getEmail().equals(loginModel.getEmail())) {
			if(bCryptPasswordEncoder.matches(loginModel.getPassword(), user.getPassword())) {
				return "Can't Use the same password";
			}
			else {
				user.setPassword(bCryptPasswordEncoder.encode(loginModel.getPassword()));
				userRepository.save(user);
				return "Password Updated";
			}
		}
		return "Password Failed to Update";
	}

	@Override
	public String profile(ProfileModel profileModel, Long userId) {
		// TODO Auto-generated method stub
		
		User user = userRepository.findById(userId).get();
		user.setFirstName(profileModel.getFirstName());
		user.setLastName(profileModel.getLastName());
		user.setEmail(profileModel.getEmail());
		user.setPhoneNo(profileModel.getPhoneNo());
		user.setProfilePicUrl(profileModel.getProfilePicUrl());
		userRepository.save(user);
		return "Profile Updated";
	}
	
}
