import React from 'react'
import Link from 'gatsby-link'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import HomepageBoxes from '../components/HomepageBoxes'
import SecondSection from '../components/SecondSection'

import 'font-awesome/css/font-awesome.min.css'
import '../styles/main.css'

const IndexPage = ({ data, pathContext }) => {
  const navItems = data.allContentfulPage.edges
  const homepage = data.allContentfulHomepage.edges[0].node

  return (
    <div>
      <Navigation lang={pathContext.langKey} navItems={navItems} />
      <Hero data={homepage} />
      <HomepageBoxes data={homepage.homepageBox} />
      <SecondSection data={homepage} />

      <div className="content site-width">
        <h2>Lates articles</h2>
        <div className="articles">
          <div className="article">
            <div className="thumb">
              <a href="#">
                <img src={require('../assets/surfer.jpg')} alt="" />
              </a>
            </div>
            <div className="article-body">
              <a href="#">
                <a href="#">
                  <h3 className="title">Title of the Article</h3>
                </a>
              </a>
              <div className="published">12.3.2018 12:03:45</div>
              <div className="text">
                Bacon ipsum dolor amet brisket buffalo rump ball tip beef ground
                round salami kevin cupim flank short ribs pork belly jowl
                capicola. Meatball swine pork, brisket beef ribs porchetta short
                loin shoulder t-bone. Sirloin leberkas shoulder tri-tip. Turkey
                short loin t-bone, andouille prosciutto capicola porchetta jowl
                landjaeger filet mignon bacon sausage. Sausage chicken leberkas
                pork corned beef kevin cupim turkey tenderloin pork chop.
              </div>
              <a href="#" className="article-read-more">
                <button className="button-main">
                  Read more
                  <i className="fa fa-angle-right" />
                </button>
              </a>
            </div>
          </div>

          <div className="article">
            <div className="thumb">
              <a href="#">
                <img
                  src={require('../assets/girl-in-front-of-sea.jpg')}
                  alt=""
                />
              </a>
            </div>
            <div className="article-body">
              <a href="#">
                <h3 className="title">Title of the Article</h3>
              </a>
              <div className="published">12.3.2018 12:03:45</div>
              <div className="text">
                Bacon ipsum dolor amet brisket buffalo rump ball tip beef ground
                round salami kevin cupim flank short ribs pork belly jowl
                capicola. Meatball swine pork, brisket beef ribs porchetta short
                loin shoulder t-bone. Sirloin leberkas shoulder tri-tip. Turkey
                short loin t-bone, andouille prosciutto capicola porchetta jowl
                landjaeger filet mignon bacon sausage. Sausage chicken leberkas
                pork corned beef kevin cupim turkey tenderloin pork chop.
              </div>
              <a href="#" className="article-read-more">
                <button className="button-main">
                  Read more
                  <i className="fa fa-angle-right" />
                </button>
              </a>
            </div>
          </div>

          <div className="article">
            <div className="thumb">
              <a href="#">
                <img src={require('../assets/beach-entrance.jpg')} alt="" />
              </a>
            </div>
            <div className="article-body">
              <a href="#">
                <h3 className="title">Title of the Article</h3>
              </a>
              <div className="published">12.3.2018 12:03:45</div>
              <div className="text">
                Bacon ipsum dolor amet brisket buffalo rump ball tip beef ground
                round salami kevin cupim flank short ribs pork belly jowl
                capicola. Meatball swine pork, brisket beef ribs porchetta short
                loin shoulder t-bone. Sirloin leberkas shoulder tri-tip. Turkey
                short loin t-bone, andouille prosciutto capicola porchetta jowl
                landjaeger filet mignon bacon sausage. Sausage chicken leberkas
                pork corned beef kevin cupim turkey tenderloin pork chop.
              </div>
              <a href="#" className="article-read-more">
                <button className="button-main">
                  Read more
                  <i className="fa fa-angle-right" />
                </button>
              </a>
            </div>
          </div>

          <div className="article">
            <div className="thumb">
              <a href="#">
                <img src={require('../assets/globe.jpg')} alt="" />
              </a>
            </div>
            <div className="article-body">
              <a href="#">
                <h3 className="title">Title of the Article</h3>
              </a>
              <div className="published">12.3.2018 12:03:45</div>
              <div className="text">
                Bacon ipsum dolor amet brisket buffalo rump ball tip beef ground
                round salami kevin cupim flank short ribs pork belly jowl
                capicola. Meatball swine pork, brisket beef ribs porchetta short
                loin shoulder t-bone. Sirloin leberkas shoulder tri-tip. Turkey
                short loin t-bone, andouille prosciutto capicola porchetta jowl
                landjaeger filet mignon bacon sausage. Sausage chicken leberkas
                pork corned beef kevin cupim turkey tenderloin pork chop.
              </div>
              <a href="#" className="article-read-more">
                <button className="button-main">
                  Read more
                  <i className="fa fa-angle-right" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="content site-width">
        <div className="form-box">
          <div>
            <h2>Contact Us</h2>
            Send Us a message. Anything you ever wanted to ask. Anything. This
            text is just a filler.
          </div>
          <form id="contact">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Your Name" />

            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="your@email.com"
            />

            <label htmlFor="text">Message</label>
            <textarea
              name="text"
              id="text"
              placeholder="Ask anything you want"
            />

            <input type="submit" value="Send" />
          </form>
        </div>
      </div>

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
  query skHomepage {
    allContentfulHomepage(filter: { node_locale: { eq: "sk" } }) {
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
        }
      }
    }
    allContentfulPage(filter: { node_locale: { eq: "sk" } }) {
      edges {
        node {
          slug
          node_locale
          title
          id
        }
      }
    }
  }
`
