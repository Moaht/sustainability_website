import React, { useState } from "react";

class SignUp extends React.Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);
    
      fetch('api/register/', {
        method: 'POST',
        body: data,
      });
    }

    render() {
      return (
        <div id="signup-container" className="content-container">
        <h1>
          <b>Sign Up</b>
          <br></br>
          <br></br>
        </h1>
        <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                placeholder="Username"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
          <br></br>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      );
    }
  }
  
export default SignUp;
