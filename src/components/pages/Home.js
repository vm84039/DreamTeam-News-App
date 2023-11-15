import React, { useState, useEffect } from "react";
import "../Home.css";
import { getNewsforHomePage } from "../../service/NewsApi";
import NavBar from "../NavBar";
import NewsTicker from "../NewsTicker/NewsTicker";

const Home = () => {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    getNewsforHomePage()
      .then((data) => setRowData(data)) // Reverse the rowData array
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

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
          <img className="image" align="middle" src="crest.png" alt="crest" />
        </div>
      </header>
      <NavBar />

      <main className="bigStory">
        <div className="top">
          <h2>Top News Story</h2>
          <h1 className="headA"> Article Title</h1>
        </div>
        <div className="mainStory_content">
          <div className="picture">
            <img src="crest.png" alt="picture" />
          </div>
          <div className="content">
            <p className="story"> content blah blah</p>
            <a className="storyLink" href="#">
              Read all about it
            </a>
          </div>
        </div>
      </main>

      <main className="mainPart">
        {rowData.map((article, index) => (
          <article key={index}>
            <p className="top">
              Top{" "}
              {article.category.charAt(0).toUpperCase() +
                article.category.slice(1).toLowerCase()}
            </p>
            <h2 className="headA">{article.title}</h2>
            <p>{article.content}</p>
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </article>
        ))}
      </main>
      <NewsTicker />

      <footer>
        <p>&copy; 2023 News Website</p>
      </footer>
    </div>
  );
};

export default Home;
