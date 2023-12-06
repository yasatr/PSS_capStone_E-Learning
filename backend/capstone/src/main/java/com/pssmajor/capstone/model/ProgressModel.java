package com.pssmajor.capstone.model;

//import com.pssmajor.capstone.entity.Course;
//import com.pssmajor.capstone.entity.Progress;
//import com.pssmajor.capstone.entity.User;

//import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProgressModel {
	
	private Long enrollmentId;
	private int score;
	private Boolean status;
}
