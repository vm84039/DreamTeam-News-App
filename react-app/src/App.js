import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
//import { useNavigate } from "react-router-dom";
import { AppContext } from "./lib/contextLib";
import Routes from "./Routes";
//import { LinkContainer } from "react-router-bootstrap";

function App() {

 // const nav = useNavigate();
  const [ setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isRegistered, userRegistered] = useState(false);
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");

  const loggedIn = useCallback(async () => {
    if (!token) {
      throw new Error("NOT LOGGED IN");
    }
    // ... your existing logic ...
  }, [token, /* other dependencies */]);

  const onLoad = useCallback(async () => {
    try {
      if (isRegistered) {
        userRegistered(false);
      }
      await loggedIn();
      userHasAuthenticated(true);
    } catch (e) {
      // Handle any errors here
    }

    setIsAuthenticating(false);
  }, [isRegistered, loggedIn, userRegistered, userHasAuthenticated, setIsAuthenticating]);

  useEffect(() => {
    onLoad();
  }, [onLoad]);



  useEffect(() => {
    onLoad();
  }, [onLoad]);
  

  // function handleLogout() {
  //   userHasAuthenticated(false);
  //   userRegistered(false)
  //   setToken("");
  //   setUser("")
  //   nav("/login");
  //   //setIsAuthenticating(true);
  // }

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
