import { ActionFunction, json } from "@remix-run/node";
import { destroyUserSession } from "~/data/session.sever";

export const action: ActionFunction = async ({ request }) => {
  if (request.method !== "POST") {
    throw json({ message: "Invalid request on Logout" }, { status: 400 });
  }
  return await destroyUserSession(request);
};
