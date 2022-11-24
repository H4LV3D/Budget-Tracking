import React from "react";
import "./Styles/index.css";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { ThemeProvider } from "./Components/themeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
