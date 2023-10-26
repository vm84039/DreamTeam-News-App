import React, { useState, useEffect } from "react";
import "./Home.css";
import { getNewsforHomePage } from "../service/NewsApi";
import NewsTicker from "./NewsTicker/NewsTicker";

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
        <h1>News Website</h1>
      </header>

      <nav>
        <a href="#">Home</a>
        <a href="#">World</a>
        <a href="#">Technology</a>
        <a href="#">Sports</a>
        <a href="#">Entertainment</a>
        <a
          style={{ position: "absolute", right: "0", paddingRight: "10px" }}
          href="#"
        >
          Login
        </a>
        <NewsTicker />
      </nav>

      <main>
        {rowData.map((article, index) => (
          <article key={index}>
            <h2>
              Top{" "}
              {article.category.charAt(0).toUpperCase() +
                article.category.slice(1).toLowerCase()}
            </h2>
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

export default Home;
