import React, { useState, useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    document.title = 'Account';
  }, []);
  
  return (
    <div id="account-container" class="content-container">
      <h1>
        <b>Account</b>
      </h1>
      <div id="account-page">
        <button className="btn btn-primary" id="logout-button">Log Out</button>
        <br></br>
        <button className="btn btn-primary change-button">Change Email</button>
        <button className="btn btn-primary change-button">Change Username</button>
        <button className="btn btn-primary change-button">Change Password</button>
        <br></br>
        <button className="btn btn-primary" id="tac-button">Terms and Conditions</button>
        <br></br>
        <button className="btn btn-primary" id="delete-button">Delete Account</button>
      </div>
    </div>
  );
}