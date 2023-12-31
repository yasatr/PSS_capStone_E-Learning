package com.pssmajor.capstone.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pssmajor.capstone.entity.Content;
import com.pssmajor.capstone.model.ContentModel;
import com.pssmajor.capstone.service.ContentService;

@RestController
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

}
