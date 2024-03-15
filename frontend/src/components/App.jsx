import HomePage from "./HomePage";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import Map from "./Map";
import Collection from "./Collection";
import React, { useState } from "react";

export default function App() {
  const token = localStorage.getItem('token');
  const isAuthenticated = !!token;
  const [page, setPage] = useState(isAuthenticated ? 'map' : 'home');

  const renderPage = () => {
    switch(page) {
      case 'home':
        return <HomePage setPage={setPage} />;
      case 'signup':
        return <SignUp setPage={setPage}/>;
      case 'login':
        return <LogIn setPage={setPage}/>;
      case 'map':
        return <Map setPage={setPage}/>;
      case 'collection':
        return <Collection setPage={setPage}/>;
    }
  }

  return (
    <div>
      
      {renderPage()}
    </div>
  );
}
