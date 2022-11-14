import React from "react";
import "./Styles/index.css";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home.js";
import About from "./Pages/About";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
