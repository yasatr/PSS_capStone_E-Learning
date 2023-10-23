 package com.pssmajor.capstone.model;

import java.time.Instant;

import com.pssmajor.capstone.entity.Course;
import com.pssmajor.capstone.entity.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class EnrollmentModel {
	private Long userId;
	private Long courseId;
}
