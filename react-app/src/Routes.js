import React from "react";
import Technology from "./components/pages/Technology";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Register from "./components/Register";
//import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import RegisterRoute from "./components/RegisterRoute";

export default function Links() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/technology" element={<Technology />} />
      <Route
        path="/login"
        element={
          <UnauthenticatedRoute>
            <Login />
          </UnauthenticatedRoute>
        }
      />
      <Route
        path="/register"
        element={
          <RegisterRoute>
            <Register />
          </RegisterRoute>
        }
      />
      <Route path="*" element={<NotFound />} />;
    </Routes>
  );
}
