package com.pssmajor.capstone.entity;


import java.time.Instant;
import java.util.Date;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Course {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long courseId;
	private String courseTitle;
	private String courseDesc;
	
	@JoinColumn(foreignKey = @ForeignKey(name= "FK_COURSE_TEACHER"))
	private User teacher;
	
	private Date startDate;
	private Date endDate;
	private String imgUrl;
	
	@CreationTimestamp
	private Instant createdAt;
	
	private Boolean isActive=true;
}
