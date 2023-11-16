const db = require("../db");

async function getNewsforHomePage() {
  try {
    const categories = [
      "BUSINESS",
      "ENTERTAINMENT",
      "ENVIRONMENT",
      "FOOD",
      "HEALTH",
      "POLITICS",
      "SCIENCE",
      "SPORTS",
      "TECHNOLOGY",
      "TOP",
      "TOURISM",
      "WORLD",
    ];

    const homePageList = await Promise.all(
      categories.map(async (category) => {
        const story = await getLatestNewsByCategory(category);
        return story;
      })
    );

    return homePageList.filter(Boolean); // Remove null values
  } catch (error) {
    throw error;
  }
}

async function getLatestNewsByCategory(category) {
  try {
    const query =
      "SELECT * FROM news WHERE category = $1 ORDER BY pub_date DESC LIMIT 1";
    const result = await db.oneOrNone(query, [category]);
    return result;
  } catch (error) {
    throw error;
  }
}

async function getNewsforTicker() {
  try {
    const checkList = await db.any(
      "SELECT title FROM news WHERE category = $1 ORDER BY pub_date DESC LIMIT 5",
      ["TOP"]
    );
    const titleList = checkList.map((title) => {
      const lastChar = title.title.charAt(title.title.length - 1);
      return ",.?!;:'\"(){}[]".indexOf(lastChar) !== -1
        ? title.title + "  "
        : title.title + ".  ";
    });
    return titleList;
  } catch (error) {
    throw error;
  }
}
async function getNewsByCategory(category) {
  try {
    const news = await db.any("SELECT * FROM news WHERE category = $1 AND content IS NOT NULL AND content != 'null'", [
      category,
    ]);
    return news;
  } catch (error) {
    throw error;
  }
}
async function getTopStory() {
  try {
    const query =
      "SELECT * FROM news WHERE category = 'TOP' AND image_url IS NOT NULL AND image_url <> 'null' ORDER BY pub_date DESC LIMIT 1";
    const result = await db.oneOrNone(query);
    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getNewsforHomePage,
  getNewsforTicker,
  getLatestNewsByCategory,
  getNewsByCategory,
  getTopStory,
};
