import React from "react";
import { reduxForm, Field } from "redux-form";

import submit from "./SignupSubmit";

import { isValidEmail } from "sane-email-validation";

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = "*Required*";
  }
  if (!values.email) {
    errors.email = "*Required*";
  } else if (!isValidEmail) {
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

const renderInput = ({ input, type, meta, label }) => (
  <div
    className={[
      meta.error && meta.touched ? "error" : "",
      meta.active ? "active" : ""
    ].join(" ")}
  >
    <label>{label}</label>
    <input {...input} type={type} placeholder={label} />
    {meta.error && meta.touched && <span>{meta.error}</span>}
  </div>
);
let SignupForm = ({ handleSubmit, submitting }) => (
  <form onSubmit={handleSubmit(submit)}>
    <div>
      <Field
        name="username"
        type="text"
        label="Username"
        component={renderInput}
      />
    </div>
    <div>
      <Field name="email" type="email" label="Email" component={renderInput} />
    </div>
    <div>
      <Field
        name="password"
        type="password"
        label="Password"
        component={renderInput}
      />
    </div>
    <div>
      <Field
        name="cpassword"
        type="password"
        label="Confirm Password"
        component={renderInput}
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
