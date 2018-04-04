import React from 'react'
import Link from 'gatsby-link'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import HomepageBoxes from '../components/HomepageBoxes'
import SecondSection from '../components/SecondSection'
import ContactFormSection from '../components/ContactFormSection'
import BlogPostList from '../components/BlogPostList'

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
      <HomepageBoxes data={homepage.homepageBox} />
      <SecondSection data={homepage} />
      <BlogPostList posts={blogPosts} lang={pathContext.langKey} />
      <ContactFormSection data={homepage} />

      <div className="footer">
        <div className="footer-content site-width">
          <div>
            <div className="logo">OnBoard</div>
          </div>
          <div>
            492 Near beach road
            <br /> 2009 Pyrmont
            <br />
            <br /> zuzka@onboardstudy.sk
          </div>
          <div className="footer-menu">
            <div>
              <a href="#">About Us</a>
            </div>
            <div>
              <a href="#">Austradiva</a>
            </div>
            <div>
              <a href="#">New Zealand</a>
            </div>
            <div>
              <a href="#">Canada</a>
            </div>
            <div>
              <a href="#">Contact</a>
            </div>
          </div>
          <div>
            <div>
              <a href="#">
                <i className="fa fa-facebook-square" /> OnBoard
              </a>
            </div>
            <div>
              <a href="#">
                <i className="fa fa-twitter-square" /> @OnBoard
              </a>
            </div>
            <div>
              <a href="#">
                <i className="fa fa-instagram" /> @OnBoard
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom site-width">
          <div>
            &copy; 2018 &middot; OnBoard Study{' '}
            <div className="created-by">
              Created by <a href="#">sajgal.com</a>
            </div>
          </div>
        </div>
      </div>
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
        }
      }
    }
    allContentfulPage(filter: { node_locale: { eq: "en" } }) {
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
