import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

class BlogPost extends Component {
  render() {
    const {
      title,
      createdAt,
      featuredImage,
      content,
    } = this.props.data.contentfulBlog
    const navItems = this.props.data.allContentfulPage.edges
    const homepage = this.props.data.allContentfulHomepage.edges[0].node

    return (
      <div className="page-content">
        <Navigation navItems={navItems} lang={this.props.pathContext.langKey} />

        <div className="featured-image-box-full">
          <div className="site-width title-holder">
          <span>
            <h1>{title}</h1>
            <span className="date">{createdAt}</span>
            </span>
          </div>
          <div className="img gradient">
            <Img sizes={featuredImage.sizes} />
          </div>
        </div>

        <div className="site-width">
          <div
            dangerouslySetInnerHTML={{
              __html: content.childMarkdownRemark.html,
            }}
          />
        </div>
        <Footer data={homepage} navItems={navItems} />
      </div>
    )
  }
}

BlogPost.PropTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogPost

export const pageQuery = graphql`
  query blogPostQuery($slug: String!, $langKey: String!) {
    contentfulBlog(slug: { eq: $slug }, node_locale: { eq: $langKey }) {
      title
      createdAt(formatString: "DD.MM.YYYY")
      featuredImage {
        sizes(maxWidth: 2000) {
          ...GatsbyContentfulSizes
        }
      }
      content {
        childMarkdownRemark {
          html
        }
      }
    }
    allContentfulPage(
      filter: { node_locale: { eq: $langKey }, showInMenu: { eq: true } }
    ) {
      edges {
        node {
          slug
          node_locale
          title
          id
        }
      }
    }
    allContentfulHomepage(filter: { node_locale: { eq: $langKey } }) {
      edges {
        node {
          id
          footerContacts {
            childMarkdownRemark {
              html
            }
          }
          footerSocialLinks {
            id
            text
            link
            type
          }
        }
      }
    }
  }
`
