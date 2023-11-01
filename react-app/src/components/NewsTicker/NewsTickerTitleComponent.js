import React from "react";
import "./NewsTicker.css";

const NewsTickerTitleComponent = ({ title }) => {
  return (
    <div className="news-ticker">
      <div className="ticker-item">{title}</div>
    </div>
  );
};

export default NewsTickerTitleComponent;