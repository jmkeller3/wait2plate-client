import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="username"
          component="input"
          type="text"
          placeholder="username"
        />
        <Field
          name="password"
          component="input"
          type="password"
          placeholder="Secrets"
        />
        <button type="submit" label="submit">
          Login
        </button>
      </form>
    );
  }
}

LoginForm = reduxForm({
  form: "login"
})(LoginForm);

export default LoginForm;
