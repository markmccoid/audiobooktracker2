import { createCookieSessionStorage, redirect } from "@remix-run/node";

const SESSION_SECRET = process.env.SESSION_SECRET;
if (!SESSION_SECRET) {
  throw new Error("Session Secret not set");
}
//-- Create object with session storage functions
const sessionStorage = createCookieSessionStorage({
  cookie: {
    // set to true for production, else false
    secure: process.env.NODE_ENV === "production",
    secrets: [SESSION_SECRET],
    sameSite: "lax",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    httpOnly: true, // client side js code can't access cookie
  },
});

//-------------------------------------
//-- Get the userId from the session cookie IF logged in
//-------------------------------------
export async function getUserFromSession(request: Request) {
  // Check for a session cookie and extract the userId from it
  // NOTE: we added the userId to the session cookie in createUserSession()
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );

  const userId = session.get("userId");

  // if there is no userId, then we are not authenticated
  // if (!userId) {
  //   throw redirect("/");
  // }

  return userId;
}

//-------------------------------------
//-- Check for user session (logged in user)
//-- If not logged in throw redirect which redirects
//-- and stops further execution of loader
//-------------------------------------
export async function requireUserSession(request: Request) {
  const userId = await getUserFromSession(request);

  if (!userId) {
    throw redirect("/login");
  }

  return userId;
}
//-------------------------------------
//-- Destroy session cookie (clear it) on log out
//-------------------------------------
export async function destroyUserSession(request: Request) {
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );
  console.log("DESTORY", session.get("userId"));
  return redirect("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session),
    },
  });
}

//-------------------------------------
//-- LOGIN/Signup - Create a new user session cookie
//-------------------------------------
export async function createUserSession(userId: string, redirectPath: string) {
  const session = await sessionStorage.getSession();
  session.set("userId", userId);
  return redirect(redirectPath, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session),
    },
  });
}
