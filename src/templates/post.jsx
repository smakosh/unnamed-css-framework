import React from 'react'
import Helmet from 'react-helmet'

export default class PostTemplate extends React.Component {
	render() {
		const { slug } = this.props.pathContext
		const postNode = this.props.data.markdownRemark
		const post = postNode.frontmatter
		if (!post.id) {
			post.id = slug
		}
		return (
			<React.Fragment>
				<Helmet>
					<title>{`${post.title} | SharkCloud`}</title>
				</Helmet>
				<div>
					<h1>{post.title}</h1>
					<div dangerouslySetInnerHTML={{ __html: postNode.html }} />
				</div>
			</React.Fragment>
		)
	}
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
      }
      fields {
        slug
      }
    }
  }
`
