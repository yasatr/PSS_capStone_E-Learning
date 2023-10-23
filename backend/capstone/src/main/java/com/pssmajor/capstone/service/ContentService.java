package com.pssmajor.capstone.service;

import com.pssmajor.capstone.entity.Content;
import com.pssmajor.capstone.model.ContentModel;

public interface ContentService {

	Content addContent(ContentModel contentModel);

	Content updateContent(Long contentId, ContentModel contentModel);

}
