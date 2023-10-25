package com.cognixia.jump.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.cognixia.jump.model.News;
import com.cognixia.jump.model.News.Category;



@Repository
public interface NewsRepository extends JpaRepository<News, Integer>  {
	
    public List<News> findByCategory(Category category);
}
