import React from "react";
import { Link } from "react-router-dom";
import "./homepage-style.css";

export default function HomePage() {
  return (
    <div id="content-container">
      <img src="/favicon.svg" />
      <div id="rectangle_11" className="text-center">
        <br></br>
        <br></br>
        <br></br>
        <Link to="/login" className="btn btn-primary btn-lg">
          Log In
        </Link>
        <Link to="/signup" className="btn btn-primary btn-lg">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
