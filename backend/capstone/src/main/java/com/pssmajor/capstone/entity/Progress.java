package com.pssmajor.capstone.entity;

import java.time.Instant;

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
import lombok.ToString;

@Entity
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Progress {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long progressId;
	@JoinColumn(name = "courseId", nullable = false, foreignKey = @ForeignKey(name="FK_COURSE_PROGRESS"))
	private Course course;
	@JoinColumn(name = "userId", nullable = false, foreignKey = @ForeignKey(name="FK_USER_PROGRESS"))
	private User student;
	private int score;
	private Boolean status = false;
}
