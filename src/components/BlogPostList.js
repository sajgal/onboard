import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const BlogPostList = props => {
  const postList = props.posts.map(postNode => {
    const post = postNode.node
    const postLink = `/${post.node_locale}/blog/${post.slug}`;

    return (
      <div className="article" key={post.id}>
        <div className="thumb">
          <Link to={postLink}>
            <Img resolutions={post.featuredImage.resolutions} />
          </Link>
        </div>
        <div className="article-body">
          <Link to={postLink}>
            <h3 className="title">{post.title}</h3>
          </Link>
          <div className="published">{post.createdAt}</div>
          <div className="text">{post.content.childMarkdownRemark.excerpt}</div>
          <Link to={postLink} className="article-read-more">
            <button className="button-main">
              Read more
              <i className="fa fa-angle-right" />
            </button>
          </Link>
        </div>
      </div>
    )
  })

  return (
    <div className="content site-width">
      <h2>Lates articles</h2>
      <div className="articles">{postList}</div>
    </div>
  )
}

export default BlogPostList
