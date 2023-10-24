import React, { useState, useEffect } from 'react';
import './App.css';
import { useNavigate } from "react-router-dom";
import { AppContext } from "./lib/contextLib";
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";

function App() {

  const nav = useNavigate();
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isRegistered, userRegistered] = useState(false);
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    onLoad();
  }, []);
  
  async function onLoad() {
    try {
      if (isRegistered) {
        userRegistered(false);
      }
      await loggedIn();
      userHasAuthenticated(true);
    } catch (e) {
      // if (e !== "No current user") {
      //   alert(e);
      // }
    }
  
    setIsAuthenticating(false);
  }

  async function loggedIn() {
    if (!token) {
      throw new Error("NOT LOGGED IN");
    }

  }
  

  function handleLogout() {
    userHasAuthenticated(false);
    userRegistered(false)
    setToken("");
    setUser("")
    nav("/login");
    //setIsAuthenticating(true);
  }

  sessionStorage.clear();

  return (
    <div className="App">

      <>
        <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated, token, setToken, isRegistered, userRegistered, user, setUser }}>
          <Routes />
        </AppContext.Provider>
      </>
    </div>
  );
}

export default App;
