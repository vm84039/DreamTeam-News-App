package com.cognixia.jump.service;

import java.util.ArrayList;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognixia.jump.model.News;
import com.cognixia.jump.model.News.Category;
import com.cognixia.jump.repository.NewsRepository;

// FROM AUTHENTICATOR
// import com.cognixia.jump.model.User;

@Service
public class NewsService {

	@Autowired
	NewsRepository repo;

	public List<News> getNewsforHomePage() {
		List<News> homePageList = new ArrayList<>();
		Category[] categories = Category.values();

		for (Category category : categories) {
			Optional<News> story = getLatestNewsByCategory(category);
			if (story.isPresent()) {
				homePageList.add(story.get());
			}
		}
		return homePageList;
	}

	public List<String> getNewsforTicker() {
		List<String> checkList = repo.findTop5TitlesByCategoryOrderByPubDateDesc(Category.TOP);
		List<String> titleList = new ArrayList<>();

		for (String title : checkList) {
			char lastChar = title.charAt(title.length() - 1);
			String modifiedTitle;

			if (",.?!;:'\"(){}[]".indexOf(lastChar) != -1) {
				modifiedTitle = title + "  ";
			} else {
				modifiedTitle = title + ".  ";
			}
			titleList.add(modifiedTitle);
		}

		return titleList;
	}

	public Optional<News> getLatestNewsByCategory(Category category) {
		return repo.findTopByCategoryOrderByPubDateDesc(category);
	}
	
	// ADD USER RELATED THINGS HERE

	public List<News> getNewsforPage() {
		List<News> homePageList = new ArrayList<>();
		Category[] categories = Category.values();

		for (Category category : categories) {
			Optional<News> story = getLatestNewsByCategory(category);
			if (story.isPresent()) {
				homePageList.add(story.get());
			}
		}
		return homePageList;
	}
}
