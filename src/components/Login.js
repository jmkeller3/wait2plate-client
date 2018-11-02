import React from "react";
import { connect } from "react-redux";
import { loginThunk, signupThunk } from "../actions";

import "./Login.css";
import LoginForm from "./LoginForm";

import SignupForm from "./SignupForm";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "login",
      username: "",
      email: "",
      pass: "",
      cpass: ""
    };
  }

  handleLogin = e => {
    e.preventDefault();
    const { username, pass } = this.state;
    this.props.dispatch(loginThunk(username, pass));
    this.setState({ username: "", pass: "" });
  };

  handleSignup = e => {
    e.preventDefault();
    const { username, email, pass } = this.state;
    this.props.dispatch(signupThunk(username, email, pass));
    this.setState({ username: "", email: "", pass: "", cpass: "" });
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
        {this.state.tab !== "login" ? <SignupForm /> : <LoginForm />}
      </div>
    );
  }
}

export default connect()(Login);
