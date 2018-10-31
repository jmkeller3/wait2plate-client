import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { myInput } from "./Field";
import { requiredInput, matchInput } from "../Validation";

class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="username"
          component={myInput}
          type="text"
          placeholder="username"
          validate={[requiredInput]}
        />
        <Field
          name="password"
          component={myInput}
          type="password"
          placeholder="password"
          validate={[requiredInput]}
        />
        <Field
          name="cpassword"
          component={myInput}
          type="password"
          placeholder="confirm password"
          validate={[requiredInput, matchInput]}
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
