import React from "react";
import { Footer, Header } from ".";

import "./layout.css";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="grow">{children}</div>
      <Footer />
    </div>
  );
};
