import React from "react";
import { ThemeToggle } from "./theme-toggle";

export const HeaderMain = () => {
  return (
    <div className="flex w-full flex-row justify-between">
      <h1 className="text-3xl font-bold">NextJs Boilerplate app folder</h1>
      <ThemeToggle />
    </div>
  );
};
