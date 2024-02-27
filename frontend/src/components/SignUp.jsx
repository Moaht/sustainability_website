import React, { useState } from "react";
import "./signup-style.css";
import RegForm from "./RegForm";

export default function SignUp() {

 

  return (
    <div id="content-container">
      <h1>
        <b>Sign Up</b>
        <br></br>
        <br></br>
      </h1>
      <RegForm />
    </div>
  );
}