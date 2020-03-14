import React from "react";
import "./navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../pages/about";
import Home from "../pages/home";
import Works from "../pages/works";
import Team from "../pages/team";
import Contact from "../pages/contact";
const Navbar = () => {
  return (
    <Router>
      <div className="app">
        <nav className="app-header">
          <ul>
            <li>
              <link to="/">Home</link>
            </li>
            <li>
              <link to="/works">How it Works</link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/about">About AceVote</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/team">
          <Team />
        </Route>

        <Route path="/how-it-works">
          <Works />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
export default Navbar;
