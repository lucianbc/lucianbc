import React from "react";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
}

const Header = () => {
  return (
    <header className="bg-teal-300 flex content-between justify-between">
      <p>Lucian Boaca</p>
      <div className="flex">
        <p>Blog</p>
        <p>Photography</p>
        <p>Career</p>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section>
      <p>Hi, I'm Lucian</p>
      <p>
        I am a software engineer, currently working on putting healthcare in the
        hands of millions by writing React Native at Babylon Health
      </p>
      <p>This is my corner of the internet. All views are my own</p>
    </section>
  );
};
