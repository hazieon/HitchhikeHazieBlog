import "./App.css";
import React from "react";
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./Components/Home";
import CustomisedMenus from "./Components/Menu";
import CustomSlider from "./Components/Slider";
import About from "./Components/About";
import Contact from "./Components/ContactPage";
import Creativity from "./Components/Creativity";
import Lifestyle from "./Components/Lifestyle";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./images/earth-hz.png";
import TravelPage from "./Components/TravelPage";
import Moongirl from "./Components/MoongirlPage";
import Book from "./Components/MoongirlBookPage";
import Dragon from "./Components/DragonPage";
import Comic from "./Components/DragonBookPage";
import CodeProjects from "./Components/codeProjects";

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
              {/* <li className="pages" id="cart">
                <Link to="/checkout">🛒</Link>
              </li> */}
              <li className="pages" id="creative">
                <CustomisedMenus />
              </li>
              <Link to="/creativity">
                <li className="pages" id="creative">
                  Creativity
                </li>
              </Link>

              <Link to="/travel">
                <li className="pages" id="creative">
                  Travel
                </li>
              </Link>
            </ul>
          </nav>

          <ScrollToTop>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/codeprojects">
                <CodeProjects />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/creativity">
                <Creativity />
              </Route>
              <Route path="/travel">
                <TravelPage />
              </Route>
              <Route path="/lifestyle">
                <Lifestyle />
              </Route>
              <Route path="/moongirl">
                <Moongirl />
              </Route>
              <Route path="/moongirlBook">
                <Book />
              </Route>
              <Route path="/dragon">
                <Dragon />
              </Route>
              <Route path="/dragonBook">
                <Comic />
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
