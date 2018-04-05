import React from 'react'
import Link from 'gatsby-link'

const Navigation = props => {
  const localeNavigation = props.navItems.map(item => (
    <Link to={`/${item.node.node_locale}/${item.node.slug}/`} key={item.node.id} >
      <button className="button-smol">{item.node.title}</button>
    </Link>
  ))

  return (
    <div className="header-bottom site-width">
      <div className="logo">
        <img src={require('../assets/on-board-logo.svg')} alt="onBoard" />
      </div>
      {localeNavigation}
    </div>
  )
}

export default Navigation
