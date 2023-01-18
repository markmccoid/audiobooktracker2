import { prisma } from "./prisma.server";
import { hash, compare } from "bcryptjs";
import { createUserSession } from "./session.sever";
import { LoginServerErrors } from "~/types/authTypes";
export type SignupData = {
  email: string;
  password: string;
};

// const SESSION_SECRET = process.env.SESSION_SECRET;
// if (!SESSION_SECRET) {
//   throw new Error("Session Secret not set");
// }

// //-- Create object with session storage functions
// const sessionStorage = createCookieSessionStorage({
//   cookie: {
//     // set to true for production, else false
//     secure: process.env.NODE_ENV === "production",
//     secrets: [SESSION_SECRET],
//     sameSite: "lax",
//     maxAge: 30 * 24 * 60 * 60, // 30 days
//     httpOnly: true, // client side js code can't access cookie
//   },
// });

// //-------------------------------------
// //-- LOGIN/Signup - Create a new user session cookie
// //-------------------------------------
// async function createUserSession(userId: string, redirectPath: string) {
//   const session = await sessionStorage.getSession();
//   session.set("userId", userId);
//   return redirect(redirectPath, {
//     headers: {
//       "Set-Cookie": await sessionStorage.commitSession(session),
//     },
//   });
// }

// export const signup = async (form: SignupData) => {
//   const exists = await prisma.user.count({ where: { email: form.email } });
//   if (exists) {
//     return json(
//       {
//         error: "user already exists with that email",
//       },
//       { status: 400 }
//     );
//   }
// };

//-------------------------------------
//-- SIGN UP
//-------------------------------------
export type RegisterServerErrors = {
  name: "Email Exists";
  message: string;
};
export async function signup({ email, password }: SignupData) {
  const exsitingUser = await prisma.user.count({ where: { email } });
  // throw "crazy error";
  // If the user already exists, throw an error indicating such
  if (exsitingUser) {
    const error = new Error() as RegisterServerErrors;
    error.message = `User with email address ${email} already exists.`;
    error.name = "Email Exists";
    throw error;
  }

  const passwordHash = await hash(password, 12);

  const user = await prisma.user.create({
    data: { email: email, password: passwordHash },
  });
  return createUserSession(user.id, "/audiobooks");
}

//-------------------------------------
//-- LOGIN
//-------------------------------------

export async function login({ email, password }: SignupData) {
  // Find the user in the database
  const exsitingUser = await prisma.user.findFirst({ where: { email } });

  if (!exsitingUser) {
    const error = new Error() as LoginServerErrors;
    error.message = `User with email address ${email} not found.`;
    error.name = "Server Login Error";
    throw error;
  }

  const isPasswordMatch = compare(password, exsitingUser.password);
  if (!isPasswordMatch) {
    const error = new Error() as LoginServerErrors;
    error.message = `Password Incorrect.`;
    error.name = "Server Login Error";
    throw error;
  }

  return createUserSession(exsitingUser.id, "/audiobooks");
}
