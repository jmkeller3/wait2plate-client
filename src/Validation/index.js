export const required = input => (input ? undefined : `Required`);

export const nonEmpty = input =>
  input.trim() !== "" ? undefined : "Cannot be empty";

export const matchInput = (input, allInputs) =>
  input === allInputs.password ? undefined : "Passwords do not match";

export const email = input =>
  /^\S+@\S+$/.test(input) ? undefined : "Must be a valid email address";
