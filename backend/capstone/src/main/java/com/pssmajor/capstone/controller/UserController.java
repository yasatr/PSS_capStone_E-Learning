package com.pssmajor.capstone.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pssmajor.capstone.entity.User;
import com.pssmajor.capstone.model.ApiResponse;
import com.pssmajor.capstone.model.LoginModel;
import com.pssmajor.capstone.model.UpdateModel;
import com.pssmajor.capstone.model.UserModel;
import com.pssmajor.capstone.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
	@Autowired
	private UserService userService;
	
	@PostMapping("/signup")
	public ResponseEntity<ApiResponse> signUp(@RequestBody UserModel userModel) {
		String res =  userService.signUp(userModel);
		if(res == "Singup Success") {
			return new ResponseEntity<ApiResponse>(new ApiResponse(true, res, null), HttpStatus.OK);			
		}
		else{
			return new ResponseEntity<ApiResponse>(new ApiResponse(true, res, null), HttpStatus.BAD_REQUEST);
		}
		
	}
	
	@PostMapping("/login")
	public ResponseEntity<ApiResponse> login(@RequestBody LoginModel loginModel) {
		User user = userService.login(loginModel);
		if(user == null) {
			return new ResponseEntity<ApiResponse>(new ApiResponse(false, "Login Falied", null), HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<ApiResponse>(new ApiResponse(true, "Login Successfull", user), HttpStatus.OK);
		
	}
	
}
