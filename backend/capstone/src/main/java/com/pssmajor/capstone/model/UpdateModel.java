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
public class UpdateModel {
	public String profilePicUrl;
	public String firstName;
	public String lastName;
	public String email;
	public String phoneNo;
}
