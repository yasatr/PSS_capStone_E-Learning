package com.pssmajor.capstone.entity;
import java.time.Instant;
import java.util.Date;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import jakarta.persistence.*;

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
	
	@ManyToOne
	@JoinColumn(name="userId", nullable = false, foreignKey = @ForeignKey(name= "FK_COURSE_TEACHER"))
	private User teacher;
	
	private Date startDate;
	private Date endDate;
	@Column(length = 2048)
	private String imgUrl;
	
	@CreationTimestamp
	private Instant createdAt;
	
	private Boolean isActive=true;

}
