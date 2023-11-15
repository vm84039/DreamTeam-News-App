import "./NavBar.css";
//import React, { useState, useEffect } from "react";

const NavBar = () => {
  return (
    <div>
      <nav>
        <a href="/">Home</a>
        <a href="/world">World</a>
        <a href="/technology">Technology</a>
        <a href="/politics">Politics</a>
        <a href="/science">Science</a>
      </nav>
    </div>
  );
};

export default NavBar;
