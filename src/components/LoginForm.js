import React from "react";
import { reduxForm, Field, focus } from "redux-form";
import Input from "./Field";

import submit from "./LoginSubmit";

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = "*Required*";
  }

  if (!values.password) {
    errors.password = "*Required*";
  }

  return errors;
};

let LoginForm = ({ handleSubmit, submitting }) => (
  <form onSubmit={handleSubmit(submit)}>
    <div>
      <Field name="username" type="text" label="Username" component={Input} />
    </div>

    <div>
      <Field
        name="password"
        type="password"
        label="Password"
        component={Input}
      />
    </div>
    <button type="submit" disable={submitting}>
      Submit
    </button>
  </form>
);

LoginForm = reduxForm({
  form: "login",
  validate,
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus("login", Object.keys(errors)[0]))
})(LoginForm);
export default LoginForm;
