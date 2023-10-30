import "./NavBar.css";
import React, { useState, useEffect } from "react";
import NewsTicker from "./NewsTicker/NewsTicker";

const NavBar = () => {
  return (
    <div>
      <nav>
        <a href="/">Home</a>
        <a href="#">World</a>
        <a href="/technology">Technology</a>
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
    </div>
  );
};

export default NavBar;
