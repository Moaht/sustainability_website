
import React from "react";

class RegForm extends React.Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);
    
      fetch('api/signup/', {
        method: 'POST',
        body: data,
      });
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              <b>Username</b>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              <b>First Name</b>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              <b>Last Name</b>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              <b>Email</b>
            </label>
            <input
              type="text"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              <b>Password</b>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
        <br></br>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      );
    }
  }
  
export default RegForm;
