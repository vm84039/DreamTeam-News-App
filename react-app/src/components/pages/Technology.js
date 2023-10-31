import React, { useState, useEffect } from "react";
import "../Home.css";
import { getNewsByCategory } from "../../service/NewsApi";
//import NewsTicker from "../NewsTicker/NewsTicker";
import NavBar from "../NavBar";

const Technology = () => {
  const [rowData, setRowData] = useState([]);
  const endpoint = "technology";
  useEffect(() => {
    getNewsByCategory(endpoint)
      .then((data) => setRowData(data)) // Reverse the rowData array
      .catch((error) => console.error("Error fetching data:", error));
    console.log(rowData);
  }, [rowData]);

  return (
    <div className="Home">
      <header>
        <h1>News Website</h1>
      </header>
      <NavBar />
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

export default Technology;
