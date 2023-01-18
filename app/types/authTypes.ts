export type AuthFormData = {
  email: string;
  password: string;
  button: "login" | "signup";
};

export type LoginServerErrors = {
  name: "Server Login Error";
  message: string;
};
