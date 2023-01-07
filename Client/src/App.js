import React from "react";
import "./Styles/index.css";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
// import Budget from "./Pages/Budgets";
import Downloads from "./Pages/Downloads";
import { ThemeProvider } from "./Components/themeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/budgets" element={<Budget />} /> */}
            <Route path="/download" element={<Downloads />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
