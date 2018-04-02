import React from 'react'
import Link from 'gatsby-link'

const HeaderTop = props => {
  const links = props.langs.map(lang => (
    <Link
      to={lang.link}
      key={lang.langKey}
      style={{
        color: lang.selected ? '#499BB1' : 'white',
        margin: "0 5px"
      }}
    >
      {lang.langKey}
    </Link>
  ))

  return (
    <div className="header-top">
      <div className="header-language site-width">
        {links}
        {/* <i className="fa fa-globe" /> Slovenčina (SK)
        <i className="fa fa-angle-down" /> */}
      </div>
    </div>
  )
}

export default HeaderTop
