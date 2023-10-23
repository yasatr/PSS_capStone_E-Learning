package com.pssmajor.capstone.entity;

import java.time.Instant;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
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
public class Feedback {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long feedbackId;
	@JoinColumn(name = "courseId", nullable = false, foreignKey = @ForeignKey(name="FK_COURSE_FEEDBACK"))
	private Course courseId;
	@JoinColumn(name = "userId", nullable = false, foreignKey = @ForeignKey(name="FK_USER_FEEDBACK"))
	private User userId;
	@Column(length = 100)
	private String feedbackDesc;
	@CreationTimestamp
	private Instant createdAt;
	private Boolean isActive=true;
}
