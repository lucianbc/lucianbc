import React from "react";
import { Link } from "gatsby";

export const Header = () => {
  return (
    <header className="pt-4 pb-2 shadow-sm">
      <nav className="container mx-auto">
        <Link to="/">
          <h3>Lucian Boaca</h3>
        </Link>
      </nav>
    </header>
  );
};
