package com.pssmajor.capstone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pssmajor.capstone.entity.Content;
import com.pssmajor.capstone.model.ApiResponse;
import com.pssmajor.capstone.model.ContentModel;
import com.pssmajor.capstone.service.ContentService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ContentContoller {
	
	@Autowired
	private ContentService contentService;
	
	@PostMapping("/content")
	public Content addContent(@RequestBody ContentModel contentModel) {
		Content content = contentService.addContent(contentModel);
		return content;
	}
	
	@PutMapping("/content/{id}")
	public Content updateContent(@PathVariable("id")Long contentId, @RequestBody ContentModel contentModel) {
		Content content = contentService.updateContent(contentId,contentModel);
		return content;
	}
	
	@GetMapping("/allContent")
	public ResponseEntity<ApiResponse> allContent(@RequestParam("courseId") Long courseId){
		List<Content> listContent = contentService.getContentByCourseId(courseId);
		if(listContent.size() == 0) {
			return new ResponseEntity<ApiResponse>(new ApiResponse(false, "No content for this course", null), HttpStatus.BAD_REQUEST);
		}
		else {
			return new ResponseEntity<ApiResponse>(new ApiResponse(true, "Contents found", listContent), HttpStatus.OK);
		}
	}

}
