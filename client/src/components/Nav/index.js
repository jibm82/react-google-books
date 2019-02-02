import React from "react";
import { Router, Route, Link } from "react-router-dom";

function Nav() {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <Link to="/" className="navbar-brand" activeClassName="active">
          Google Books Search
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link" activeClassName="active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/saved" className="nav-link" activeClassName="active">
                Saved Books
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
