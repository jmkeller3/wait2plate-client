import { SubmissionError } from "redux-form";

function submit(values) {
  return async () => {
    // simulate server latency
    const data = localStorage.getItem("users");
    const usernames = data.map(datum => {
      return datum.username;
    });
    if (usernames.includes(values.username)) {
      throw new SubmissionError({
        username: "User already exist",
        _error: "Login failed!"
      });
    } else {
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
    }
  };
}

export default submit;
