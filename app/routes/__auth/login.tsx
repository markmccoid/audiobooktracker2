import { ActionFunction, json } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import React from "react";
import InputField from "~/components/input/InputField";
import { login, signup, SignupData } from "~/data/auth.server";
import { authFormValidation } from "~/utils/validation";
import type { AuthFormData, LoginServerErrors } from "~/types/authTypes";

//-------------------------------------------------
//-- Action Error Type
//-- Union errors type from server and validation error types
// -------------------------------------------------
export type ActionErrors =
  | LoginServerErrors
  | {
      name: "Validation Errors";
      email?: string;
      password?: string;
    };

//---------------------------------
//-- Action for Login
//---------------------------------
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const { email, password } = Object.fromEntries(formData) as AuthFormData;
  // Validate email and password (we won't use password validation)
  const validationErrors = authFormValidation({ email, password });
  if (validationErrors?.email) {
    return json({
      name: "Validation Errors",
      email: validationErrors.email?._errors.join("-"),
    });
  }

  try {
    return await login({ email, password });
  } catch (error) {
    if (error instanceof Error) {
      let errorObj = error as LoginServerErrors;
      if (errorObj.name === "Server Login Error") return json(error);
    }
    throw new Error(String(error));
  }
};

function Login() {
  const actionData = useActionData<ActionErrors>();

  return (
    <div className="flex flex-col flex-grow border border-black justify-center items-center">
      <h1 className="text-3xl mb-4">Audiobook Tracker Login</h1>
      <Form
        method="post"
        className="flex flex-col rounded-lg p-6 w-96 bg-gray-400"
      >
        {actionData?.name === "Server Login Error" && (
          <div>{actionData.message}</div>
        )}
        <InputField
          label="Email"
          name="email"
          type="text"
          error={
            actionData?.name === "Validation Errors"
              ? actionData?.email
              : undefined
          }
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          error={
            actionData?.name === "Validation Errors"
              ? actionData?.password
              : undefined
          }
        />
        <div className="w-full text-center">
          <button
            type="submit"
            name="button"
            value="login"
            className="rounded-lg bg-emerald-800 px-3 py-2 text-xl text-white"
          >
            Sign In
          </button>
        </div>
      </Form>
    </div>
  );
}

export default Login;
