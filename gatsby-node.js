const path = require("path");

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve("src/templates/page.js");
    resolve(
      graphql(`
        {
          allContentfulPage(limit: 100) {
            edges {
              node {
                id
                slug
                node_locale
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        result.data.allContentfulPage.edges.forEach(edge => {
          createPage({
            path: `/${edge.node.node_locale}/${edge.node.slug}/`,
            component: pageTemplate,
            context: {
              slug: edge.node.slug,
              id: edge.node.id
            }
          });
        });
        return;
      })
    );
  });
};
