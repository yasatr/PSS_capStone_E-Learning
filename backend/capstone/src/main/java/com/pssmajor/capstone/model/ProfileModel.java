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
public class ProfileModel {
	private String firstName;
	private String lastName;
	private String email;
	private String phoneNo;
	private String profilePicUrl;
}
