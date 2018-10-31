import React, { Component } from "react";
import { Field, reduxForm, SubmissionError, focus } from "redux-form";
import { Input } from "./Field";
import { required, matchInput, nonEmpty, email } from "../Validation";

export class LoginForm extends Component {
  onSubmit(inputs) {
    return new Promise((res, rej) => {
      setTimeout(() => res("foo"), 2000);
    })
      .then(res => {
        if (!res.ok) {
          if (
            res.headers.has("content-type") &&
            res.headers.get("content-type").startsWith("application/json")
          ) {
            return res.json().then(err => Promise.reject(err));
          }
          return Promise.reject({
            code: res.status,
            message: res.statusText
          });
        }
        return;
      })
      .then(() => console.log("Submitted with inputs", inputs))
      .catch(err => {
        const { reason, message, location } = err;
        if (reason === "ValidationError") {
          return Promise.reject(new SubmissionError({ [location]: message }));
        }
        return Promise.reject(
          new SubmissionError({ _error: "Error submitting message" })
        );
      });
  }

  render() {
    let successMessage;
    if (this.props.submitSucceeded) {
      successMessage = (
        <div className="message message-success">
          Message submitted successfully
        </div>
      );
    }

    let errorMessage;
    if (this.props.error) {
      errorMessage = (
        <div className="message message-error">{this.props.error}</div>
      );
    }

    return (
      <form onSubmit={this.props.handleSubmit(inputs => this.onSubmit(inputs))}>
        {successMessage}
        {errorMessage}
        <Field
          name="username"
          component={Input}
          type="text"
          placeholder="username"
          validate={[required, nonEmpty]}
        />
        <Field
          name="password"
          component={Input}
          type="password"
          placeholder="password"
          validate={[required, nonEmpty]}
        />
        <Field
          name="cpassword"
          component={Input}
          type="password"
          placeholder="confirm password"
          validate={[required, nonEmpty, matchInput]}
        />
        <button type="submit" label="submit">
          Login
        </button>
      </form>
    );
  }
}
