package com.pssmajor.capstone.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class UserModel {
	private String firstName;
	private String lastName;
	private String email;
	private String password;
	private String phoneNo;
	private String role;
	private String profilePicUrl;
	private String matchingPass;
}
