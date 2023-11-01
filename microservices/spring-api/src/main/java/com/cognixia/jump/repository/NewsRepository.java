package com.cognixia.jump.repository;


import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.cognixia.jump.model.News;
import com.cognixia.jump.model.News.Category;



@Repository
public interface NewsRepository extends JpaRepository<News, Integer>  {
	
    public List<News> findByCategory(Category category);
    
    Optional<News> findTopByCategoryOrderByPubDateDesc(Category category); 
    
    @Query("SELECT n.title FROM News n WHERE n.category = :category ORDER BY n.pubDate DESC LIMIT 5")
    List<String> findTop5TitlesByCategoryOrderByPubDateDesc(@Param("category") Category category);
}
