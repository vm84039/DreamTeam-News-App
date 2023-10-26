package com.cognixia.jump.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cognixia.jump.model.News;
import com.cognixia.jump.model.News.Category;
import com.cognixia.jump.repository.NewsRepository;
import com.cognixia.jump.service.NewsService;

@RestController
@RequestMapping("/api/")
public class NewsController {
	
	@Autowired
	NewsRepository repo;
	
	@Autowired
	NewsService service;
	
	//http://localhost:8080/api/news/sports		
	@GetMapping("/news/{query}")
	public ResponseEntity<?> getNewsByCategory(@PathVariable String query) {
	    Category category = getCategoryFromString(query);
	    if (category == null) {
	        return ResponseEntity.status(404).body("Invalid Category");
	    }

	    List<News> news = repo.findByCategory(category);
	    if (news.isEmpty()) {
	        return ResponseEntity.status(404).body("Category not found");
	    } else {
	        return ResponseEntity.status(200).body(news);
	    }
	}
	
	//http://localhost:8080/api/news/homepage
	@GetMapping("/news/homepage")
	public ResponseEntity<?> getNewsforHomePage() {
		List<News> news = service.getNewsforHomePage();

	    if (news.isEmpty()) {
	        return ResponseEntity.status(404).body("Server error");
	    } else {
	        return ResponseEntity.status(200).body(news);
	    }
	}
	@GetMapping("/news/ticker")
	public ResponseEntity<?> getNewsforTicker() {
		List<String> news = service.getNewsforTicker();

	    if (news.isEmpty()) {
	        return ResponseEntity.status(404).body("Server error");
	    } else {
	        return ResponseEntity.status(200).body(news);
	    }
	}

	

	private Category getCategoryFromString(String query) {
	    try {
	        return Category.valueOf(query.toUpperCase());
	    } catch (IllegalArgumentException e) {
	        // Handle invalid category string
	        return null;
	    }
	}

}
