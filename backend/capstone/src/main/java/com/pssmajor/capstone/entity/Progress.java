package com.pssmajor.capstone.entity;

import java.time.Instant;

import jakarta.persistence.Entity;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
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
	@OneToOne 
	@JoinColumn(name = "enrollmentId", nullable = false, foreignKey = @ForeignKey(name="FK_COURSE_PROGRESS"))
	private Enrollment enrollment;

	private int score = 0;
	private Boolean status = false;
}
