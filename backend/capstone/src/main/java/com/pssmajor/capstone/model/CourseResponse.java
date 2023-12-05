package com.pssmajor.capstone.model;

import java.sql.Date;

import com.pssmajor.capstone.entity.Course;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CourseResponse {
	private Long courseId;
	private String courseTitle;
	private String courseDesc;
	private String imgUrl;
	UserSmallModel userSmallModel;
}
