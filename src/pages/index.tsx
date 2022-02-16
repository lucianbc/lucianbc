import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}

const links = {
  twitter: "https://twitter.com/lucian_bc",
  github: "https://github.com/lucianbc",
  photography: "https://photos.lucianbc.com",
};

const A = (
  props: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLAnchorElement> &
    React.AnchorHTMLAttributes<HTMLAnchorElement>
) => <a {...props} target="_blank" className="underline text-blue-600" />;

const Hero = () => {
  return (
    <section className="bg-teal-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="items-center justify-center flex">
            <StaticImage
              src="../assets/Me.jpg"
              alt={"Portrait Photo"}
              className="rounded-full"
              width={200}
              height={200}
            />
          </div>
          <div className="items-center justify-center flex">
            <div className="text-center md:text-left">
              <h1>Hi, I'm Lucian</h1>
              <p>
                I am a software engineer and I currently work as a React Native
                developer at Babylon. Here I'm writing about all things coding.
              </p>
              <p>
                Find me on <A href={links.github}>GitHub</A>,{" "}
                <A href={links.twitter}>Twitter</A> or check out my{" "}
                <A href={links.photography}>photography website</A>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
