import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import FactSheetFormSection from '../../components/FactSheetFromSection'
import Hero from '../../components/Hero'

class FactSheet extends Component {
  render() {
    const homepage = this.props.data.allContentfulHomepage.edges[0].node
    const menuItems = this.props.data.allContentfulMenu.edges

    return (
      <div className="page-content">
        <Navigation lang="en" menuItems={menuItems} menuType="top" />
        {/*<Hero data={homepage}/>*/}
        <FactSheetFormSection data={homepage} lang="en" />

        <Footer data={homepage} menuItems={menuItems} menuType="top" />
      </div>
    )
  }
}

FactSheet.PropTypes = {
  data: PropTypes.object.isRequired,
}

export default FactSheet

export const factSheetQuery = graphql`
  query FactSheetQuery {
    allContentfulHomepage(filter: { node_locale: { eq: "en" } }) {
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
    allContentfulMenu(filter: { node_locale: { eq: "en" } }) {
      edges {
        node {
          id
          type
          node_locale
          items {
            ... on ContentfulPage {
              id
              link: slug
              text: title
              node_locale
            }
            ... on ContentfulImageLink {
              id
              link
              text
              node_locale
            }
            ... on ContentfulTextLink {
              id
              link
              text
              node_locale
            }
          }
        }
      }
    }
  }
`
