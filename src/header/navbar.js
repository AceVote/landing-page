import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
  render() {
    return (
      <div className="app">
        <nav className="app-header">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/how-it-works">How it Works</Link>
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
    );
  }
}
export default Navbar;
