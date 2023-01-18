import { unstable_composeUploadHandlers } from "@remix-run/node";
import { Link, useLocation } from "@remix-run/react";
import React from "react";

function AuthHeader() {
  const location = useLocation();
  // You can find the current path by using the location.pathname key
  // Since this is the auth header, if there is a userID (get from loaderData)
  // then redirect to main location

  // console.log("loc", location.pathname);
  const isLoginPage = location.pathname === "/login";
  return (
    <nav className="bg-emerald-500 p-3 flex text-3xl space-x-4">
      <h1 className="">Audiobook Tracker</h1>
      {isLoginPage && (
        <Link to="/signup" className="underline text-green-900">
          SignUp
        </Link>
      )}
      {isLoginPage || (
        <Link to="/login" className="underline text-green-900">
          Login
        </Link>
      )}
    </nav>
  );
}

export default AuthHeader;
