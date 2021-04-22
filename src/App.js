import './App.css';
import React, {useState} from "react";
import Home from "./Components/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
               <img className="logo" src={"./logo.svg"} alt="logo"/>
              </div></Link>
            </li>
            <li className="pages" id="cart">
              <Link to="/checkout">🛒</Link>
            </li>
          </ul>
        </nav>

       
        <Switch>
          <Route path="/about">

          </Route>
          <Route path="/">
          <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
