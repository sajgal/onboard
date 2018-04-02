import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image";

const HomepageBoxes = props => {
  const boxes = props.data.map(box => (
    <div className="well" key={box.id}>
      <Img sizes={box.image.sizes} />
      <h3>{box.title}</h3>
      <div
        dangerouslySetInnerHTML={{
          __html: box.content.childMarkdownRemark.html,
        }}
      />
      <Link to={box.link} key={box.link}>
        <button>
          {box.buttonText}
          <i className="fa fa-angle-right" />
        </button>
      </Link>
    </div>
  ))

  return (
    <div className="content site-width">
      <div className="wells">{boxes}</div>
    </div>
  )
}

export default HomepageBoxes
