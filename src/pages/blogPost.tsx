import React from "react";
import { graphql } from "gatsby";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import { Layout } from "../components";
import "../styles/blog.scss";

deckDeckGoHighlightElement();

export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      fields {
        date(formatString: "MMMM Do, YYYY")
      }
      timeToRead
    }
  }
`;

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <div className="container mx-auto mt-4 pt-1">
        <div className="mb-8">
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <p>
            {`${data.markdownRemark.fields.date} • ${data.markdownRemark.timeToRead} min read`}
          </p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </div>
    </Layout>
  );
};

export default BlogPost;
