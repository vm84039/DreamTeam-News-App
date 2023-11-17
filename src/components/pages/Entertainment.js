import React, { useState, useEffect } from "react";
import "../Home.css";
import { getNewsByCategory } from "../../service/NewsApi";
import NewsTicker from "../NewsTicker/NewsTicker";
import NavBar from "../NavBar";
import { Container, Row, Col } from "react-bootstrap";

const Entertainment = () => {
  const [rowData, setRowData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [topStory, setTopStory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const options = { month: "long", day: "numeric", year: "numeric" };
  const todayDate = new Date().toLocaleDateString(undefined, options);
  const category = "Entertainment";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true); // Set loading to true before making the request

        const data = await getNewsByCategory(category);

        // Set rowData and filter topStory based on image_url
        setRowData(data);
        setTopStory(
          data.find(
            (story) => story.image_url !== null && story.image_url !== "null"
          )
        );
        console.log("TopStory" + topStory.title);
        console.log(rowData);
        setIsLoading(false); // Set loading to false after successful data fetching
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = rowData.filter((article) =>
    article.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="Home">
      <NavBar />
      <NewsTicker/>

      <div className="top">
        <h2
          className="capitalize"
          style={{ position: "absolute", left: "0", paddingRight: "10px" }}
        >
          Top {category} Story
        </h2>
        <h2 style={{ position: "absolute", right: "0", paddingLeft: "10px" }}>
          {todayDate}
        </h2>
        <br />

        <h1 className="headA">{topStory.title}</h1>
      </div>
      {/* Container for Image and Text */}
      <Container fluid className="custom-container">
        <Row>
          {/* Image Col */}
          <Col xs={12} md={6} className="image-col">
            <img src={topStory.image_url} alt="picture" className="img-fluid" />
          </Col>

          {/* Text Col */}
          <Col xs={12} md={6} className="text-col">
            <p className="story">
              {topStory.content} ...
              <a className="storyLink" href={topStory.link}>
                Read all about it
              </a>
            </p>
          </Col>
        </Row>
      </Container>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search content..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <main>
        <div className = "otherStories">
          {filteredData.map((article, index) => (
            <article key={index}>
              <h2>{article.title}</h2>
              <p>{article.content}</p>
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </article>
          ))}
        </div>
      </main>

      <footer>
        <p>&copy; 2023 News Website</p>
      </footer>
    </div>
  );
};

export default Entertainment;
