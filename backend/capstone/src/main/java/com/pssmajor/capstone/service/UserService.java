package com.pssmajor.capstone.service;

import com.pssmajor.capstone.entity.User;
import com.pssmajor.capstone.model.LoginModel;
import com.pssmajor.capstone.model.UpdateModel;
import com.pssmajor.capstone.model.UserModel;

public interface UserService {

	String signUp(UserModel userModel);

	User login(LoginModel loginModel);
	
}
