import React from "react";
import { reduxForm, Field } from "redux-form";
import Input from "./Field";
import submit from "./SignupSubmit";
import isValidEmail from "sane-email-validation";

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = "*Required*";
  }
  if (!values.email) {
    errors.email = "*Required*";
  } else if (!isValidEmail(values.email)) {
    errors.email = "*Invalid Email*";
  }
  if (!values.password) {
    errors.password = "*Required*";
  }
  if (!values.cpassword) {
    errors.cpassword = "*Required*";
  }
  return errors;
};

let SignupForm = ({ handleSubmit, submitting, error }) => (
  <form onSubmit={handleSubmit(submit)}>
    <div>
      <Field name="username" type="text" label="Username" component={Input} />
    </div>
    <div>
      <Field name="email" type="email" label="Email" component={Input} />
    </div>
    <div>
      <Field
        name="password"
        type="password"
        label="Password"
        component={Input}
      />
    </div>
    {error !== null && <div>{error}</div>}
    <div>
      <Field
        name="cpassword"
        type="password"
        label="Confirm Password"
        component={Input}
      />
    </div>
    <button type="submit" disable={submitting}>
      Submit
    </button>
  </form>
);

SignupForm = reduxForm({
  form: "signup",
  validate
})(SignupForm);
export default SignupForm;
