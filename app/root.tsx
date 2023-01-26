import {
  ErrorBoundaryComponent,
  LinksFunction,
  LoaderFunction,
  MetaFunction,
  redirect,
} from "@remix-run/node";

import { json } from "@remix-run/node";
import {
  CatchBoundaryComponent,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
} from "@remix-run/react";
import { getAllAudiobooks, initialBookLoad } from "./data/audiobookGet.server";
import styles from "./styles/app.css";
import ratingStyles from "@smastrom/react-rating/style.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

// type LoaderData = {
//   books: Awaited<ReturnType<typeof getAllAudiobooks>>;
// };

export const loader: LoaderFunction = () => {
  // initialBookLoad();
  console.log("Root Loader Run");

  return null;
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "stylesheet",
      href: ratingStyles,
    },
  ];
};

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  console.log("Error Boundary", error);
  return (
    <main>
      <div>
        <h1>Uncaught Error Boundary</h1>
        <h2>{error.message}</h2>
      </div>
    </main>
  );
};

export const CatchBoundary: CatchBoundaryComponent = () => {
  const caughtResponse = useCatch();

  console.log("catchboundary", caughtResponse);
  return (
    <main>
      <div>
        <h1>Uncaught Error Catch</h1>
        <h2>{caughtResponse?.statusText}</h2>
        <h2>{caughtResponse.data?.message}</h2>
      </div>
    </main>
  );
};
