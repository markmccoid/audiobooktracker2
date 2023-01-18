import { redirect } from "@remix-run/node";
export async function loader({ request }: { request: Request }) {
  return redirect("/login");
}
