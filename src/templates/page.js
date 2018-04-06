import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

class Page extends Component {
  render() {
    const { title, createdAt, body } = this.props.data.contentfulPage
    const navItems = this.props.data.allContentfulPage.edges
    const homepage = this.props.data.allContentfulHomepage.edges[0].node

    return (
      <div>
        <Navigation navItems={navItems} lang={this.props.pathContext.langKey} />
        <div className="site-width">
          <h1>{title}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
          />
        </div>
        <Footer data={homepage} navItems={navItems} />
      </div>
    )
  }
}

Page.PropTypes = {
  data: PropTypes.object.isRequired,
}

export default Page

export const pageQuery = graphql`
  query PageQuery($slug: String!, $langKey: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
    }
    allContentfulPage(filter: { node_locale: { eq: $langKey } }) {
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
