package com.pssmajor.capstone.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Data
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class UserSmallModel {
	private Long userId;
	private String firstName;
	private String lastName;
	private String phoneNo;
	private String role;
}
