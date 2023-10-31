import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { getNewsforTicker } from "../../service/NewsApi";
import NewsTickerTitleComponent from "./NewsTickerTitleComponent";
import "./NewsTicker.css"; // Import the NewsTicker-specific CSS

const NewsTicker = () => {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    getNewsforTicker()
      .then((data) => setRowData(data)) // Reverse the rowData array
      .catch((error) => console.error("Error fetching data:", error));
      console.log(rowData);
  }, [rowData]);

  return (
    <Marquee>
        <NewsTickerTitleComponent key={0} title={rowData[0]} />
        <NewsTickerTitleComponent key={1} title={rowData[1]} />
        <NewsTickerTitleComponent key={2} title={rowData[2]} />
        <NewsTickerTitleComponent key={3} title={rowData[3]} />
        <NewsTickerTitleComponent key={2} title={rowData[4]} />
    </Marquee>
  );
};
export default NewsTicker;
