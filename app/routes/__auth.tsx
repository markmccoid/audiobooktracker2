import { LoaderFunction, redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import AuthHeader from "~/components/Auth/AuthHeader";
import { getUserFromSession, requireUserSession } from "~/data/session.sever";

// import { getUserFromSession } from "~/data/auth.server";

export default function AuthLayout() {
  return (
    <div className="flex flex-col bg-emerald-200 h-screen w-full ">
      <AuthHeader />
      <Outlet />
    </div>
  );
}

export const loader: LoaderFunction = async ({ request }) => {
  return (await getUserFromSession(request)) ? redirect("/audiobooks") : null;
};

// export function links() {
//   return [
//     {
//       rel: "stylesheet",
//       href: styles,
//     },
//   ];
// }
