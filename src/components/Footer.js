import React from 'react'
import Link from 'gatsby-link'

const Footer = props => {
  const localeNavigation = props.navItems.map(item => (
    <div>
      <Link
        to={`/${item.node.node_locale}/${item.node.slug}/`}
        key={item.node.id}
      >
        {item.node.title}
      </Link>
    </div>
  ))

  const socialLinks = props.data.footerSocialLinks.map(item => (
    <div>
      <a href={item.link} key={item.id} target="__blank">
        <i
          className={`fa fa-${
            item.type === 'facebook' ? 'facebook-square' : item.type
          }`}
        />{' '}
        {item.text}
      </a>
    </div>
  ))

  return (
    <div className="footer">
      <div className="footer-content site-width">
        <div>
          <div className="logo">OnBoard</div>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: props.data.footerContacts.childMarkdownRemark.html,
          }}
        />
        <div className="footer-menu">{localeNavigation}</div>
        <div>
          {socialLinks}
        </div>
      </div>
      <div className="footer-bottom site-width">
        <div>
          &copy; {(new Date().getFullYear())} &middot; OnBoard Study{' '}
          <div className="created-by">
            Created by <a href="https://www.sajgal.com">sajgal.com</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
