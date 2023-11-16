import React, { useState, useEffect } from "react";
import "../Home.css";
import { getTopStory, getNewsforHomePage } from "../../service/NewsApi";
import NavBar from "../NavBar";
import NewsTicker from "../NewsTicker/NewsTicker";
import { Container, Row, Col } from "react-bootstrap";


const Home = () => {
  const [rowData, setRowData] = useState([]);
  const [sportsStory, setSportsStory] = useState([]);
  const [worldStory, setWorldStory] = useState([]);
  const [entertainmentStory, setEntertainmentStory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const options = { month: "long", day: "numeric", year: "numeric" };
  const todayDate = new Date().toLocaleDateString(undefined, options);

  useEffect(() => {
    getTopStory()
      .then((topStory) => {
        setRowData(topStory);
        console.log("Top Story:", topStory);
      })
      .catch((error) => console.error("Error fetching top story:", error));
  }, []);

  useEffect(() => {
    getNewsforHomePage()
      .then((data) => {
        setSportsStory(data.filter((story) => story.category === "SPORTS"));
        setWorldStory(data.filter((story) => story.category === "WORLD"));
        setEntertainmentStory(
          data.filter((story) => story.category === "ENTERTAINMENT")
        );
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching home data:", error));
  }, [isLoading]); // Only trigger when isLoading changes

  return (
    <div className="Home">
      <header>
        <div className="RightS">
          <a
            className="Logins"
            style={{ position: "absolute", right: "0", paddingRight: "10px" }}
            href="/login"
          >
            Login
          </a>
        </div>
        <div className="LeftS">
          <a
            className="Regs"
            style={{ position: "absolute", left: "0", paddingLeft: "10px" }}
            href="/register"
          >
            Register
          </a>
        </div>
        <div className="headers">
          <h1 className="title">Dreamtastic News</h1>
          <h3 className="title">The fever dream you can't wake up from!</h3>
          <img className="crest" align="middle" src="crest.png" alt="crest" />
        </div>
      </header>
      <NavBar />
      <NewsTicker />

      <main className="bigStory">
        <div className="top">
          <h2 style={{ position: "absolute", left: "0", paddingRight: "10px" }}>
            Top News Story
          </h2>
          <h2 style={{ position: "absolute", right: "0", paddingLeft: "10px" }}>
            {todayDate}
          </h2>
          <br />

          <h1 className="headA">{rowData.title}</h1>
        </div>
        {/* Container for Image and Text */}
        <Container fluid className="custom-container">
          <Row>
            {/* Image Col */}
            <Col xs={12} md={6} className="image-col">
              <img
                src={rowData.image_url}
                alt="picture"
                className="img-fluid"
              />
            </Col>

            {/* Text Col */}
            <Col xs={12} md={6} className="text-col">
              <p className="story">
                {rowData.content} ...
                <a className="storyLink" href={rowData.link}>
                  Read all about it
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </main>

      <main className="mainPart">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {/* Top World Story */}
            {worldStory.length > 0 && (
              <>
                <p className="top">Top World Story</p>
                <h2 className="headA">{worldStory[0].title}</h2>
                <p>{worldStory[0].content}</p>
                <a
                  href={worldStory[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </>
            )}
            {/* Top Sports Story */}
            {sportsStory.length > 0 && (
              <>
                <p className="top">Top Sports Story</p>
                <h2 className="headA">{sportsStory[0].title}</h2>
                <p>{sportsStory[0].content}</p>
                <a
                  href={sportsStory[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </>
            )}

            {/* Top Entertainment Story */}
            {entertainmentStory.length > 0 && (
              <>
                <p className="top">Top Entertainment Story</p>
                <h2 className="headA">{entertainmentStory[0].title}</h2>
                <p>{entertainmentStory[0].content}</p>
                <a
                  href={entertainmentStory[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </>
            )}
          </>
        )}
      </main>

      <footer className ="foot">
        <p>&copy; 2023 News Website</p>
      </footer>
    </div>
  );
};

export default Home;
