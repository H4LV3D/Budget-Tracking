import React from "react";
import "./Styles/index.css";
import { Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
// import About from "./Pages/About";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={Home} />
        {/* <Route path="/about" exact component={About} /> */}
        <Route path="/login" exact component={Login} />
      </Router>
    </>
  );
}

export default App;
