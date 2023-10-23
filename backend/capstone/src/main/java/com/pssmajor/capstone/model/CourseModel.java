package com.pssmajor.capstone.model;

import java.util.Date;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CourseModel {
	
	private String courseTitle;
	private String courseDesc;
//	private User teacher;
	private Date startDate;
	private Date endDate;
	private String imgUrl;
	private Boolean isActive;
}
