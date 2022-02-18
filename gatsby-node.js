const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: `slug`,
      value: `/blog${slug}`,
    });
    createNodeField({
      node,
      name: "date",
      value: slugToDate(slug),
    });
  }
};

const slugToDate = (slug) => {
  const splits = slug.split("/");
  return new Date(
    parseInt(splits[1]),
    parseInt(splits[2]) - 1,
    parseInt(splits[3])
  );
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/pages/blogPost.tsx`),
      context: {
        slug: node.fields.slug,
      },
    });
  });
};
