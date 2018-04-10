import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const SecondSection = props => {
  const boxes = props.data.secondSectionBoxes.map(box => (
    <div className="service" key={box.id}>
      <Link to={`/${props.lang}/${box.link}`} key={box.link}>
        {box.text}
      </Link>
      <div className="img">
        <Img sizes={box.image.sizes} />
      </div>
    </div>
  ))

  return (
    <div className="content site-width">
      <h2>{props.data.secondSectionTitle}</h2>
      <div
        className="text"
        dangerouslySetInnerHTML={{
          __html: props.data.secondSectionDescription.childMarkdownRemark.html,
        }}
      />
      <div className="services">{boxes}</div>
    </div>
  )
}

export default SecondSection
