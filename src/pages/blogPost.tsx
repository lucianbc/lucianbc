import React from "react";
import { graphql } from "gatsby";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";

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
  console.debug(data);
  return (
    <div className="container mx-auto">
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <p>
        {`${data.markdownRemark.fields.date} • ${data.markdownRemark.timeToRead} min read`}
      </p>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </div>
  );
};

export default BlogPost;
