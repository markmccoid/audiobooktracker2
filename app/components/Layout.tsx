import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="h-screen w-full bg-green-500">{children}</div>;
}
