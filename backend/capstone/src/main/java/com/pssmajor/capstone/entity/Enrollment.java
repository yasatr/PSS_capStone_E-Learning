package com.pssmajor.capstone.entity;

import java.time.Instant;

import org.hibernate.annotations.UpdateTimestamp;

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
import lombok.ToString;
import jakarta.persistence.ForeignKey;

@Entity
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Enrollment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long enrollmentId;
	@JoinColumn(name="userId", nullable = false, foreignKey = @ForeignKey(name="FK_USER_ENROLLMENT"))
	private User student;
	@JoinColumn(name="courseId", nullable = false, foreignKey = @ForeignKey(name="FK_COURSE_ENROLLMENT"))
	private Course course;
	@UpdateTimestamp
	private Instant enrollDateTime;
}
