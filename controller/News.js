const express = require('express');
const router = express.Router();
const newsService = require('../service/newsService'); // Import the newsService module

// Endpoint to get news by category
router.get('/page/:category', async (req, res) => {
  try {
    const category = req.params.category.toUpperCase();
    const news = await newsService.getNewsByCategory(category);
    res.status(200).json(news);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint to get news for homepage
router.get('/homepage', async (req, res) => {
  try {
    const news = await newsService.getNewsforHomePage();
    if (news.length === 0) {
      res.status(404).send('Server error');
    } else {
      res.status(200).json(news);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Endpoint to get news for ticker
router.get('/ticker', async (req, res) => {
  try {
    const tickerNews = await newsService.getNewsforTicker();
    if (tickerNews.length === 0) {
      res.status(404).send('Server error');
    } else {
      res.status(200).json(tickerNews);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Endpoint to get news for top story
router.get('/topstory', async (req, res) => {
  try {
    const tickerNews = await newsService.getTopStory();
    if (tickerNews.length === 0) {
      res.status(404).send('Server error');
    } else {
      res.status(200).json(tickerNews);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


module.exports = router;
