import React, { useState, useEffect } from 'react';

export default function HomePage({ setPage }) {
  useEffect(() => {
    document.title = 'Account';
  }, []);
  const [error, setError] = useState("");

  
  const logOut = async () => {
    console.log(localStorage.getItem('token'));

    const response = await fetch("api/logout/", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Token " + localStorage.getItem('token'),
      },
      body: ""
    });
    if (response.ok) {
      const responseData = await response.json();
      localStorage.removeItem('token');
      // setPage('home');
      window.location.reload();
    } else {
      const responseData = await response.json();
      Object.values(responseData).forEach((value) => {
        setError(value[0]);
      } );
    }
  };

  
  return (
    <div id="account-container" class="content-container">
      <h1>
        <b>Account</b>
      </h1>
      <div id="account-page">
        <button onClick={() => logOut()} className="btn btn-primary" id="logout-button">Log Out</button>
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
