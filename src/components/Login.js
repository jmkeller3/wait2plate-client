import React from "react";

import "./Login.css";

export default function Login(props) {
  return (
    <div>
      <header role="banner">
        <h1>Sign up/Login Page</h1>
        <h2>Join the community to enjoy great meals at fast times.</h2>
      </header>

      <section className="login">
        <header>
          <h3>Sign up</h3>
        </header>
        <form class="signup-form">
          <div>
            <label for="username">Username</label>
            <input
              placeholder="username"
              type="text"
              name="username"
              id="username"
            />
          </div>
          <div>
            <label for="username">Email</label>
            <input type="text" name="username" id="username" />
          </div>
          <div>
            <label for="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </section>
    </div>
  );
}
