import React from "react";
import { Link } from "gatsby";

export const Header = () => {
  return (
    <header>
      <nav className="container mx-auto">
        <Link to="/">Lucian Boaca</Link>
      </nav>
    </header>
  );
};
