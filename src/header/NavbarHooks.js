import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../images/logo.png";
import { FaAlignRight } from "react-icons/fa";

export default function NavbarHooks() {
  const initialState = false;
  useState(initialState);
  return (
    <div>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img
                style={{ width: "40%", height: "40%" }}
                src={logo}
                alt="Ace Vote"
              />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={() => ({ initialState: !initialState })}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul className={initialState ? "nav-links show-nav" : "nav-links"}>
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
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
