import React from "react";

import "./Login.css";

export default function Login(props) {
  return (
    <div>
      <header role="banner">
        <h1>Sign up/Login Page</h1>
        <h2>Join the community to enjoy great meals at fast times.</h2>
      </header>
      {true ? (
        <section className="signup">
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
            <div>
              <label for="cpassword">Confirm Password</label>
              <input type="cpassword" name="cpassword" id="cpassword" />
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </section>
      ) : (
        <section className="login">
          <header>
            <h3>Login</h3>
          </header>
          <form class="login-form">
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
              <label for="password">Password</label>
              <input type="password" name="password" id="password" />
            </div>
            <button type="submit">Login</button>
          </form>
        </section>
      )}
    </div>
  );
}
