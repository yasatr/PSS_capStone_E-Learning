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
public class ApiResponse {
	private boolean success;
	private String message;
	private Object data;
	public ApiResponse(String message, boolean success) {
		super();
		this.success = success;
		this.message = message;
	}
}
