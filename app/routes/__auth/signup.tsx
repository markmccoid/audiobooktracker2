import { Form, useActionData } from "@remix-run/react";
import { useState, useReducer } from "react";
import { json, ActionFunction } from "@remix-run/node";
import { signup, RegisterServerErrors } from "~/data/auth.server";
import { authFormValidation } from "~/utils/validation";
import type { AuthFormData } from "~/types/authTypes";
import InputField from "~/components/input/InputField";

//-------------------------------------------------
//-- Action Error Type
//-- Union errors type from server and validation error types
// -------------------------------------------------
export type ActionErrors =
  | RegisterServerErrors
  | {
      name: "Validation Errors";
      email?: string;
      password?: string;
    };

//-------------------------------------------------
//-- Action Function
// -------------------------------------------------
export const action: ActionFunction = async ({ request }) => {
  // standard request object has our formData object on it
  const formData = await request.formData();
  const formFields = Object.fromEntries(formData) as AuthFormData;

  // Local validation
  const validationErrors = authFormValidation({
    email: formFields.email,
    password: formFields.password,
  });

  if (validationErrors) {
    return json({
      name: "Validation Errors",
      email: validationErrors.email?._errors.join("-"),
      password: validationErrors.password?._errors.join("-"),
    });
  }

  try {
    // Sign up / Register to the service
    await signup({ email: formFields.email, password: formFields.password });
  } catch (error) {
    if (error instanceof Error) {
      let errorObj = error as RegisterServerErrors;
      if (errorObj.name === "Email Exists") return json(error);
    }
    throw new Error(String(error));
  }
  return null;
};

//-------------------------------------------------
//-- SignUp COMPONENT
// -------------------------------------------------
export const Signup = () => {
  const [pwVisible, togglePwVisible] = useReducer((state) => {
    return !state;
  }, false);

  const actionData = useActionData<ActionErrors>();
  console.log("actionData", actionData);
  return (
    <div className="flex flex-col flex-grow border border-black justify-center items-center">
      <h1 className="text-3xl mb-4">Register for Audiobook Tracker</h1>
      {actionData?.name === "Email Exists" && <div>{actionData.message}</div>}
      <Form
        method="post"
        className="flex flex-col rounded-lg p-6 w-96 bg-gray-400"
      >
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
          type="passwordWpeek"
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
            value="signup"
            className="rounded-lg bg-emerald-800 px-3 py-2 text-xl text-white"
          >
            Sign Up
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Signup;
