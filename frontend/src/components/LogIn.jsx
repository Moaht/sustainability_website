import React, { useState } from "react";

export default function LogIn() {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("<YOUR_BACKEND_API_URL>/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div id="login-container" className="content-container">
      <h1>
        <b>Log In</b>
        <br></br>
        <br></br>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.email}
            onChange={handleChange}
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
