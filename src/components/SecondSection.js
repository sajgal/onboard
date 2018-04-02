import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const SecondSection = props => {
  console.log(props.data)

  const boxes = props.data.secondSectionBoxes.map(box => (
    <div className="service" key={box.id}>
      <Link to={box.link} key={box.link}>
        {box.text}
      </Link>
      <Img sizes={box.image.sizes} />
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
