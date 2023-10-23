package com.pssmajor.capstone.model;

import java.util.Date;

import com.pssmajor.capstone.entity.User;

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
public class CourseModel {
	
	private String courseTitle;
	private String courseDesc;
//	private Long userId;
	private Date startDate;
	private Date endDate;
	private String imgUrl;
}
