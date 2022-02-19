import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import { Layout, links } from "../components";

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

export default function Home({ data }: { data: Data }) {
  return (
    <Layout>
      <Hero />
      <BlogPosts data={data} />
    </Layout>
  );
}

const A = (
  props: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLAnchorElement> &
    React.AnchorHTMLAttributes<HTMLAnchorElement>
) => <a {...props} target="_blank" className="underline text-blue-600" />;

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
