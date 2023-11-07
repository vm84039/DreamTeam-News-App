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
        <a
          style={{ position: "absolute", right: "0", paddingRight: "10px" }}
          href="/login"
        >
          Login
        </a>
        <a
          style={{ position: "absolute", left: "0", paddingLeft: "10px" }}
          href="/register"
        >
          Register
        </a>
      </nav>
    </div>
  );
};

export default NavBar;
