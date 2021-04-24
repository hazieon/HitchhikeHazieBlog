import "./App.css";
import React from "react";
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./Components/Home";
import CustomSlider from "./Components/Slider";
import About from "./Components/About";
import Creativity from "./Components/Creativity";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from "./images/earth-hz.png";
import TravelPage from "./Components/TravelPage";

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
              <li className="pages" id="creative">
                <Link to="/creativity">Creativity</Link>
              </li>
            </ul>
          </nav>

          <ScrollToTop>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/creativity">
                <Creativity />
              </Route>
              <Route path="/travel">
                <TravelPage />
              </Route>
              <Route path="/">
                <Home />
                <CustomSlider />
              </Route>
            </Switch>
          </ScrollToTop>
        </div>
      </Router>
    </div>
  );
}

export default App;
