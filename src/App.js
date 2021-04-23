import "./App.css";
import React, { useState } from "react";
import Home from "./Components/Home";
import CustomSlider from "./Components/Slider";
import About from "./Components/About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from "./images/earth-hz.png";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav className="nav-bar">
            <ul>
              <li className="home-link">
                <Link to="/">
                  <div className="logo-box">
                    <img className="logo" src={logo} alt="logo" />
                  </div>
                </Link>
              </li>
              <li className="pages" id="cart">
                <Link to="/checkout">🛒</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
              <CustomSlider />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
