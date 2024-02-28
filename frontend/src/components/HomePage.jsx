import React from "react";
import { Link } from "react-router-dom";
import "./general-styles.css";
import favicon from '../images/favicon.svg'


export default function HomePage() {
  return (
    <div id="home-container" className="content-container">
      <img id="logo" src={favicon} />
      <div>
        <br></br>
        <Link to="/login" className="btn btn-primary">
          Log In
        </Link>
        <Link to="/signup" className="btn btn-primary">
          Sign Up
        </Link>
        <Link to="/map" className="btn btn-primary">
          [DEV] Map
        </Link>
        <Link to="/collection" className="btn btn-primary">
          [DEV] Collection
        </Link>
      </div>
    </div>
  );
}
