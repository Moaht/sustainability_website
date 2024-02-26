
import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div
      className="fixed-bottom"
      style={{
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#005f00",
        padding: "20px 0",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "inherit" }}
      >
        <div className="container-fluid justify-content-center">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  exact
                  to="/"t
                  activeClassName="active"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/signup"
                  activeClassName="active"
                >
                  Sign Up
                </NavLink>
              </li>
              {/* Add more navigation links here if necessary */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
