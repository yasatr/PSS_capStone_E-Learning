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
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.Size;
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
	
	@OneToOne
	@JoinColumn(name = "enrollmentId", nullable = false, foreignKey = @ForeignKey(name="FK_COURSE_FEEDBACK"))
	private Enrollment enrollment;
	
	@Column(length = 100)
	private String feedbackDesc;
	@CreationTimestamp
	private Instant createdAt;
	@Size(min=1, max=5)
	private int rating;
	private Boolean isActive=true;
}
