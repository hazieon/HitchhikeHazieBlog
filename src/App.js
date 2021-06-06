import "./App.css";
import React, { useState, useEffect } from "react";
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./Components/Home";
import CustomisedMenus from "./Components/Menu";
import CustomSlider from "./Components/Slider";
import About from "./Components/About";
import Contact from "./Components/ContactPage";
import Creativity from "./Components/Creativity";
import Lifestyle from "./Components/Lifestyle";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TravelPage from "./Components/TravelPage";
import BlogPage from "./Components/BlogPage";
import BlogArticle from "./Components/BlogArticle";
import Moongirl from "./Components/MoongirlPage";
import Book from "./Components/MoongirlBookPage";
import Dragon from "./Components/DragonPage";
import Comic from "./Components/DragonBookPage";
import CodeProjects from "./Components/codeProjects";
import Comments from "./Components/Comments";
require("dotenv").config();
const logo = "https://i.ibb.co/4g38T9G/earth-hz.png";
const url = process.env.REACT_APP_URL;

function App() {
  const [presetData, setPresetData] = useState([]);

  async function fetchPresets() {
    let res = await fetch(url);
    const data = await res.json();
    setPresetData(data.data);
  }

  useEffect(() => {
    fetchPresets();
  }, []);

  async function postNewComment(newComment) {
    console.log("posting new comment");
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newComment),
    });
  }

  async function removeComment(id) {
    const res = await fetch(`${url}${id}`, {
      method: "DELETE",
    });
  }

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
              {/* <li className="pages" id="creative">    </li> */}
              <CustomisedMenus />

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
                <Comments
                  comments={presetData}
                  postNewComment={postNewComment}
                  removeComment={removeComment}
                />
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
              <Route path="/blogpage">
                <BlogPage />
              </Route>
              <Route path="/blogarticle">
                <BlogArticle />
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
