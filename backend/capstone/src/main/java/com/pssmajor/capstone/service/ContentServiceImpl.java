package com.pssmajor.capstone.service;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pssmajor.capstone.entity.Content;
import com.pssmajor.capstone.entity.Course;
import com.pssmajor.capstone.model.ContentModel;
import com.pssmajor.capstone.model.CourseModel;
import com.pssmajor.capstone.repository.ContentRepository;
import com.pssmajor.capstone.repository.CourseRepository;

@Service
public class ContentServiceImpl implements ContentService {
	
	@Autowired
	private ContentRepository contentRepository;
	
	@Autowired
	private CourseRepository courseRepository;

	@Override
	public Content addContent(ContentModel contentModel) {
		Content content = new Content();
		Course course;
		course = courseRepository.findById(contentModel.getCourseId()).get();
		content.setCourse(course);
		content.setContentUrl(contentModel.getContentUrl());
		content.setContentDesc(contentModel.getContentDesc());
		content.setContentType(contentModel.getContentType());
		
		contentRepository.save(content);
		return content;
	}

	@Override
	public Content updateContent(Long contentId, ContentModel contentModel) {
		Content content = contentRepository.findById(contentId).get();		
		if(Objects.nonNull(contentModel.getContentUrl()) && !"".equalsIgnoreCase(contentModel.getContentUrl())) {
			content.setContentUrl(contentModel.getContentUrl());
		}
		if(Objects.nonNull(contentModel.getContentDesc()) && !"".equalsIgnoreCase(contentModel.getContentDesc())) {
			content.setContentDesc(contentModel.getContentDesc());
		}
		if(Objects.nonNull(contentModel.getContentType()) && !"".equalsIgnoreCase(contentModel.getContentType())) {
			content.setContentType(contentModel.getContentType());
		}
		contentRepository.save(content);
		return content;
	}

	@Override
	public List<Content> getContentByCourseId(Long courseId) {
		// TODO Auto-generated method stub
		List<Content> contentList =  contentRepository.getContentByCourseId(courseId);
		return contentList;
	}
}
