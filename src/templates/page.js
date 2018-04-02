import React, { Component } from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

class Page extends Component {
  render() {
    const {
      title,
      createdAt,
      body
    } = this.props.data.contentfulPage;
    return (
      <div>
        <h1>
          {title}
        </h1>
        <p>{createdAt}</p>
        <hr />
        <div
          dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
        />
      </div>
    );
  }
}

Page.PropTypes = {
  data: PropTypes.object.isRequired
};

export default Page;

export const pageQuery = graphql`
  query PageQuery($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      createdAt(formatString: "MMMM DD, YYYY")
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
