package com.pssmajor.capstone.service;

import java.util.List;

import com.pssmajor.capstone.entity.Content;
import com.pssmajor.capstone.model.ContentModel;

public interface ContentService {

	Content addContent(ContentModel contentModel);

	Content updateContent(Long contentId, ContentModel contentModel);
	
	List<Content> getContentByCourseId(Long courseId);
}
