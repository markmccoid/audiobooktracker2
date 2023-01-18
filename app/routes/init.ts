import { json, LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = () => {
  console.log("INIT Functino");
  return json({
    initShit: "Yes It is",
  });
};
