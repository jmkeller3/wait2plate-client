export const requiredInput = input => (input ? undefined : `Input is required`);

export const matchInput = (input, allInputs) =>
  input === allInputs.password ? undefined : "Passwords do not match";
