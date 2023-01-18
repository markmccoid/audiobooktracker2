import { json } from "@remix-run/node";
import fs from "fs";
import type { Book, BookMetadata } from "~/types/bookTypes";

// export const bookData = (function () {
//   const rawFileContent = fs.readFileSync("audiobooks.json", {
//     encoding: "utf-8",
//   });
//   // console.log("LOADED FILE");
//   return JSON.parse(rawFileContent);
// })() as Book[];

export function readBookData(): Book[] {
  const rawFileContent = fs.readFileSync("audiobooks.json", {
    encoding: "utf-8",
  });
  const rawAudibleContent = fs.readFileSync("audiblebooks.json", {
    encoding: "utf-8",
  });
  // console.log("LOADED FILE");
  if (!rawFileContent && !rawAudibleContent) {
    throw json(
      { message: "No books records Found" },
      { status: 404, statusText: "Not Found" }
    );
  }
  const comboData = [
    ...JSON.parse(rawFileContent),
    ...JSON.parse(rawAudibleContent),
  ];
  return comboData;
}

//---------------------------------------------
//---------------------------------------------
export function readBookMetadata(): BookMetadata {
  const rawFileContent = fs.readFileSync("bookMetadata.json", {
    encoding: "utf-8",
  });
  // console.log("LOADED FILE");
  if (!rawFileContent) {
    throw json(
      { message: "No books records Found" },
      { status: 404, statusText: "Not Found" }
    );
  }
  return JSON.parse(rawFileContent);
}
