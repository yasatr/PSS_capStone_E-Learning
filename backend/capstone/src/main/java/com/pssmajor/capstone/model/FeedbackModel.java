package com.pssmajor.capstone.model;

import org.hibernate.type.IdentifierBagType;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class FeedbackModel {
	
	private Long userId;
	private Long courseId;
	private String feedbackDesc;
	private int rating;
}
