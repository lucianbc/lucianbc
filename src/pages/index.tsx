import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import { ExternalLink, Layout, links } from "../components";

export const query = graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "posts" }
        internal: { mediaType: { eq: "text/markdown" } }
      }
      sort: { fields: childMarkdownRemark___fields___date, order: DESC }
    ) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            title
          }
          fields {
            slug
            date(formatString: "MMMM Do, YYYY")
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`;

type Data = {
  allFile: {
    nodes: {
      childMarkdownRemark: {
        frontmatter: {
          title: string;
        };
        fields: {
          slug: string;
          date: string;
        };
        excerpt: string;
        timeToRead: string;
      };
    }[];
  };
};

const BlogPosts = ({ data }: { data: Data }) => {
  return (
    <main>
      <div className="container mx-auto">
        {React.Children.toArray(
          data.allFile.nodes.map((node) => {
            return (
              <article>
                <Link to={node.childMarkdownRemark.fields.slug}>
                  <h2>{node.childMarkdownRemark.frontmatter.title}</h2>
                </Link>
                <small>
                  {`${node.childMarkdownRemark.fields.date} • ${node.childMarkdownRemark.timeToRead} min read`}
                </small>
                <p>{node.childMarkdownRemark.excerpt}</p>
              </article>
            );
          })
        )}
      </div>
    </main>
  );
};

const Hero = () => {
  return (
    <section className="bg-teal-100">
      <div className="container mx-auto py-8">
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
                Find me on{" "}
                <ExternalLink href={links.github}>GitHub</ExternalLink>,{" "}
                <ExternalLink href={links.twitter}>Twitter</ExternalLink> or
                check out my{" "}
                <ExternalLink href={links.photography}>
                  photography website
                </ExternalLink>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home({ data }: { data: Data }) {
  return (
    <Layout>
      <Hero />
      <BlogPosts data={data} />
    </Layout>
  );
}
