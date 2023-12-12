package com.pssmajor.capstone.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pssmajor.capstone.entity.User;
import com.pssmajor.capstone.model.ApiResponse;
import com.pssmajor.capstone.model.LoginModel;
import com.pssmajor.capstone.model.ProfileModel;
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
	
	@PutMapping("/forgot")
	public ResponseEntity<ApiResponse> forgot(@RequestBody LoginModel loginModel){
		String user = userService.forgot(loginModel);
		if(user.equals("Password Updated")) {
			return new ResponseEntity<ApiResponse>(new ApiResponse(true,"Password Updated",user),HttpStatus.OK);
		}
		else {
			return new ResponseEntity<ApiResponse>(new ApiResponse(false,"Password did not update",user),HttpStatus.BAD_REQUEST);
		}
	}
	
	@PutMapping("/profile")
	public ResponseEntity<ApiResponse> profile(@RequestBody ProfileModel profileModel, @RequestParam("userId") Long userId){
		String user = userService.profile(profileModel, userId);
		return new ResponseEntity<ApiResponse>(new ApiResponse(true,"Profile Updated",user),HttpStatus.OK);
	}
}
