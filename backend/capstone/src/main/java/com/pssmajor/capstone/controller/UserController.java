package com.pssmajor.capstone.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pssmajor.capstone.entity.User;
import com.pssmajor.capstone.model.LoginModel;
import com.pssmajor.capstone.model.UserModel;
import com.pssmajor.capstone.service.UserService;

@RestController
public class UserController {
	@Autowired
	private UserService userService;
	
	@PostMapping("/signup")
	public String signUp(@RequestBody UserModel userModel) {
		userService.signUp(userModel);
		return "Signup Success";
	}
	
	@PostMapping("/login")
	public User login(@RequestBody LoginModel loginModel) {
		return userService.login(loginModel);
		
	}
}
