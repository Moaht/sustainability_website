
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
          <label htmlFor="username">Enter username</label>
          <input id="username" name="username" type="text" />
  
          <label htmlFor="firstName">Enter your forename</label>
          <input id="firstName" name="firstName" type="text" />

          <label htmlFor="lastName">Enter your surname</label>
          <input id="lastName" name="lastName" type="text" />

          <label htmlFor="email">Enter your email</label>
          <input id="email" name="email" type="email" />

          <label htmlFor="password">Enter your password</label>
          <input id="password" name="password" type="password" />
          <button>Send data!</button>
        </form>
      );
    }
  }
  
export default RegForm;