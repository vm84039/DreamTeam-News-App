import "./NavBar.css";
import "./Home.css"
//import React, { useState, useEffect } from "react";

const NavBar = () => {
  return (
    <div>
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
          <img className="crest" align="middle" src="crest.png" alt="crest" />
        </div>
      </header>
      <nav>
        <a href="/">Home</a>
        <a href="/world">World</a>
        <a href="/technology">Technology</a>
        <a href="/entertainment">Entertainment</a>
        <a href="/sports">Sports</a>
      </nav>
    </div>
  );
};

export default NavBar;
