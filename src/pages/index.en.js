import React from 'react'
import Link from 'gatsby-link'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import HomepageBoxes from '../components/HomepageBoxes'
import SecondSection from '../components/SecondSection'
import ContactFormSection from '../components/ContactFormSection'
import BlogPostList from '../components/BlogPostList'
import Footer from '../components/Footer'

import 'font-awesome/css/font-awesome.min.css'
import '../styles/main.css'

const IndexPage = ({ data, pathContext }) => {
  const navItems = data.allContentfulPage.edges
  const homepage = data.allContentfulHomepage.edges[0].node
  const blogPosts = data.allContentfulBlog.edges

  return (
    <div>
      <Navigation lang={pathContext.langKey} navItems={navItems} />
      <Hero data={homepage} />
      <HomepageBoxes data={homepage.homepageBox} lang={pathContext.langKey} />
      <SecondSection data={homepage} lang={pathContext.langKey} />
      <BlogPostList posts={blogPosts} lang={pathContext.langKey} />
      <ContactFormSection data={homepage} />
      <Footer data={homepage} navItems={navItems} />
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query enHomepage {
    allContentfulHomepage(filter: { node_locale: { eq: "en" } }) {
      edges {
        node {
          node_locale
          heroTitle
          heroDescription {
            childMarkdownRemark {
              html
            }
          }
          heroButtonText
          heroButtonLink
          homepageBox {
            id
            title
            link
            buttonText
            content {
              childMarkdownRemark {
                html
              }
            }
            image {
              sizes(maxWidth: 800) {
                ...GatsbyContentfulSizes
              }
            }
          }
          secondSectionTitle
          secondSectionDescription {
            childMarkdownRemark {
              html
            }
          }
          secondSectionBoxes {
            id
            text
            link
            image {
              sizes(maxWidth: 800) {
                ...GatsbyContentfulSizes
              }
            }
          }
          contactSectionTitle
          contactSectionText {
            childMarkdownRemark {
              html
            }
          }
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
    allContentfulPage(filter: { node_locale: { eq: "en" }, showInMenu: { eq: true } }) {
      edges {
        node {
          slug
          node_locale
          title
          id
        }
      }
    }
    allContentfulBlog(
      filter: { node_locale: { eq: "en" } }
      sort: { fields: [createdAt], order: DESC }
    ) {
      edges {
        node {
          id
          title
          slug
          node_locale
          createdAt(formatString: "DD.MM.YYYY")
          featuredImage {
            resolutions(width: 255) {
              ...GatsbyContentfulResolutions
            }
          }
          content {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`
