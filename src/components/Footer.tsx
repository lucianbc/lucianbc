import { Link } from "gatsby";
import React from "react";
import { links } from ".";

export const Footer = () => {
  return (
    <footer className="pt-12 pb-8">
      <div className="container mx-auto flex flex-wrap mb-4">
        <section className="mr-8">
          <h3>Lucian Boaca</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to={links.photography} target="_blank">
                Photography
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <h3>Social</h3>
          <ul>
            <li>
              <Link to={links.twitter}>Twitter</Link>
            </li>
            <li>
              <Link to={links.github}>Github</Link>
            </li>
            <li>
              <Link to={links.linkedin}>LinkedIn</Link>
            </li>
          </ul>
        </section>
      </div>
      <div className="container mx-auto">
        <p>© Lucian Boaca 2022. Built with ❤️ in London</p>
      </div>
    </footer>
  );
};
