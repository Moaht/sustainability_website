import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import Map from "./Map";
import Collection from "./Collection";
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/map" element={<Map />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </Router>
  );
}
export default App;
