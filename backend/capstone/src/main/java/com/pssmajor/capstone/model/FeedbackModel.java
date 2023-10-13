package com.pssmajor.capstone.model;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class FeedbackModel {
	
	private Long userId;
	private Long courseId;
	private String feedbackDesc;
}
