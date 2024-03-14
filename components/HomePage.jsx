import React from "react";
import favicon from '../images/favicon.svg';
import "./general-styles.css";

const HomePage = ({ setPage }) => {
  return (
    <div id="home-container" className="content-container">
      <img id="logo" src={favicon} alt="logo" />
      <div>
        <br></br>
        <button onClick={() => setPage('login')} className="btn btn-primary">
          Log In
        </button>
        <button onClick={() => setPage('signup')} className="btn btn-primary">
          Sign Up
        </button>
        <button onClick={() => setPage('map')} className="btn btn-primary">
          [DEV] Map
        </button><button onClick={() => setPage('collection')} className="btn btn-primary">
          [DEV] Collection
        </button>
      </div>
    </div>
  );
}

export default HomePage;