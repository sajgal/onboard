import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import FaceSheetFormSection from '../../components/FaceSheetFromSection'
import Hero from '../../components/Hero'

class FaceSheetSk extends Component {
  render() {
    const homepage = this.props.data.allContentfulHomepage.edges[0].node
    console.log(this.props.data.allContentfulHomepage)
    const menuItems = this.props.data.allContentfulMenu.edges

    return (
      <div className="page-content">
        <Navigation lang="sk" menuItems={menuItems} menuType="top" />
        {/*<Hero data={homepage}/>*/}
        <FaceSheetFormSection data={homepage} lang="sk" />

        <Footer data={homepage} menuItems={menuItems} menuType="top" />
      </div>
    )
  }
}

FaceSheetSk.PropTypes = {
  data: PropTypes.object.isRequired,
}

export default FaceSheetSk

export const faceSheetSkQuery = graphql`
  query FaceSheetSkQuery {
    allContentfulHomepage(filter: { node_locale: { eq: "sk" } }) {
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
    allContentfulMenu(filter: { node_locale: { eq: "sk" } }) {
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
