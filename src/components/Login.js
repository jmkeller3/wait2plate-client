import React from "react";
import { connect } from "react-redux";

import { loginThunk, signupThunk } from "../actions";

import "./Login.css";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "login",
      username: "",
      email: "",
      pass: ""
    };
  }

  handleLogin = e => {
    e.preventDefault();
    const { username, pass } = this.state;
    this.props.dispatch(loginThunk(username, pass));
  };

  handleSignup = e => {
    e.preventDefault();
    const { username, email, pass } = this.state;
    this.props.dispatch(signupThunk(username, email, pass));
  };

  render() {
    return (
      <div>
        <header role="banner">
          <h1>Sign up/Login Page</h1>
          <h2>Join the community to enjoy great meals at fast times.</h2>
        </header>
        <div className="tabs">
          <button
            className="btn-tab"
            onClick={() => this.setState({ tab: "login" })}
          >
            Login
          </button>
          <button
            className="btn-tab"
            onClick={() => this.setState({ tab: "signup" })}
          >
            Sign-Up
          </button>
        </div>
        {this.state.tab !== "login" ? (
          <section className="signup">
            <header>
              <h3>Sign up</h3>
            </header>
            <form className="signup-form" onSubmit={this.handleSignup}>
              <div>
                <label for="username">Username</label>
                <input
                  placeholder="username"
                  type="text"
                  name="username"
                  id="username"
                  value={this.state.username}
                  onChange={e => {
                    this.setState({ username: e.target.value });
                  }}
                />
              </div>
              <div>
                <label for="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={this.state.email}
                  onChange={e => {
                    this.setState({ email: e.target.value });
                  }}
                />
              </div>
              <div>
                <label for="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={this.state.pass}
                  onChange={e => {
                    this.setState({ pass: e.target.value });
                  }}
                />
              </div>
              <div>
                <label for="cpassword">Confirm Password</label>
                <input type="password" name="cpassword" id="cpassword" />
              </div>
              <button type="submit">Sign Up</button>
            </form>
          </section>
        ) : (
          <section className="login">
            <header>
              <h3>Login</h3>
            </header>
            <form className="login-form" onSubmit={this.handleLogin}>
              <div>
                <label for="username">Username</label>
                <input
                  placeholder="username"
                  type="text"
                  name="username"
                  id="username"
                  value={this.state.username}
                  onChange={e => {
                    this.setState({ username: e.target.value });
                  }}
                />
              </div>
              <div>
                <label for="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={this.state.pass}
                  onChange={e => {
                    this.setState({ pass: e.target.value });
                  }}
                />
              </div>
              <button type="submit">Login</button>
            </form>
          </section>
        )}
      </div>
    );
  }
}

export default connect()(Login);
