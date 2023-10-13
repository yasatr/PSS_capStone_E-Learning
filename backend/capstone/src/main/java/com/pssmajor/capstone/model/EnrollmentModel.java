package com.pssmajor.capstone.model;

import java.time.Instant;

import com.pssmajor.capstone.entity.Course;
import com.pssmajor.capstone.entity.User;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class EnrollmentModel {
	private Long userId;
	private Long courseId;
}
