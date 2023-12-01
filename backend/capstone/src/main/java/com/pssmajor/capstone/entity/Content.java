package com.pssmajor.capstone.entity;


import java.time.Instant;

import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
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
public class Content {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long contentId;
	@ManyToOne
	@JoinColumn(name = "courseId", foreignKey = @ForeignKey(name="FK_USER_CONTENT"))
	private Course course;
	private String contentUrl;
	private String contentDesc;
	@UpdateTimestamp
	private Instant modifiedAt;
	private String contentType;
	
	
}
