package com.pssmajor.capstone.model;



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
public class ContentModel {
	private Long courseId;
	private String contentUrl;
	private String contentDesc;
	private String contentType;
}
