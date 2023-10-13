package com.pssmajor.capstone.model;

import java.time.Instant;
import java.util.Date;

import com.pssmajor.capstone.entity.User;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CourseModel {
	
	private String courseTitle;
	private String courseDesc;
	private User teacher;
	private Date startDate;
	private Date endDate;
	private String imgUrl;
}
