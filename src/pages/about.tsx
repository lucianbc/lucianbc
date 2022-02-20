import React from "react";
import { ExternalLink, Layout, links } from "../components";

const About = () => {
  return (
    <Layout>
      <main className="container mx-auto mt-4 pt-1">
        <h1>About</h1>
        <p>
          I am a passionate Software Engineer based in London, with a strong
          focus on delivering quality features to the end user and improving the
          codebase and developer experience along the way.
        </p>

        <p>
          I am currently working as a full stack developer at{" "}
          <ExternalLink href={links.babylon}>Babylon</ExternalLink>, where most
          of my time is spent on our React Native app, but I am getting involved
          with different parts of our tech stack. The technologies I am working
          with on a daily basis are React Native, React, NodeJS, GraphQL,
          SpringBoot, Java. I am also fluent with Scala, Android Development,
          Kotlin and Jetpack Compose.
        </p>

        <p>
          I have graduated from the University of Bucharest with a BSc in
          Computer Science in 2019. Since 2017 I have worked as a back end
          developer at <ExternalLink href={links.knolyx}>Gentlab</ExternalLink>{" "}
          in Bucharest, software develper intern at Amazon, Luxembourg and{" "}
          <ExternalLink href={links.babylon}>Babylon</ExternalLink>, London.
        </p>

        <p>
          In my spare time I am a photographer, cyclist, runner, reader or
          probably I'm just coding.
        </p>
      </main>
    </Layout>
  );
};

export default About;
