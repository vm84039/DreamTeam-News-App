import React, { useState, useEffect } from "react";
import "../Home.css";
import { getNewsforHomePage } from "../../service/NewsApi";
import NavBar from "../NavBar";

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
        <h1 className="title">Dreamtastic News</h1>
        <h3 className="title">The fever dream you can't wake up from!</h3>
      </header>
      <NavBar />

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

      <footer>
        <p>&copy; 2023 News Website</p>
      </footer>
    </div>
  );
};

export default Home;
