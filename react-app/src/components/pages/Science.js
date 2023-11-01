import React, { useState, useEffect } from "react";
import "../Home.css";
import { getNewsByCategory } from "../../service/NewsApi";
import NewsTicker from "../NewsTicker/NewsTicker";
import NavBar from "../NavBar";

const Science = () => {
  const [rowData, setRowData] = useState([]);
  const endpoint = "science";
  useEffect(() => {
    getNewsByCategory(endpoint)
      .then((data) => setRowData(data)) // Reverse the rowData array
      .catch((error) => console.error("Error fetching data:", error));
    console.log(rowData);
  }, [rowData]);

  return (
    <div className="Home">
      <header>
        <h1 className="title">Dreamtastic News</h1>
        <h3 className="title">The fever dream you can't wake up from!</h3>
      </header>
      <NavBar />
      <NewsTicker />
      <main>
        {rowData.map((article, index) => (
          <article key={index}>
            <h2>{article.title}</h2>
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

export default Science;
