import React, { Component } from 'react'
import cx from 'classnames'
import Helmet from 'react-helmet'
import { SidebarDocs, DocsContent, BurgerIcon } from '../components/Docs'

export default class docTemplate extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selected: this.props.pathContext.slug,
			isToggled: false,
		}
	}

  toggleSideBar = () => this.setState(state => ({ isToggled: !state.isToggled }))

  selectedDoc = selected => this.setState({ selected, isToggled: false })

  selectedDocBySlug = selected => this.setState({ selected })

  render() {
  	const { slug } = this.props.pathContext
  	const postNode = this.props.data.postBySlug
  	const post = postNode.frontmatter
  	if (!post.id) {
  		post.id = slug
  	}
  	return (
  		<React.Fragment>
  			<Helmet>
  				<title>{`${post.title} | Unnamed`}</title>
  			</Helmet>
  			<div
  				className={cx('black-overlay', {
  					active: this.state.isToggled === true,
  				})}
  				onClick={this.toggleSideBar}
  			/>
  			<div className="container docs-content-container">
  				<SidebarDocs
  					selected={this.state.selected}
  					selectedDocBySlug={this.selectedDocBySlug}
  					selectedDoc={this.selectedDoc}
  					chapters={this.props.data.tableOfContents.chapters}
  					isToggled={this.state.isToggled}
  				/>
  				<BurgerIcon
  					toggleSideBar={this.toggleSideBar}
  					isToggled={this.state.isToggled}
  				/>
  				<DocsContent title={post.title} content={postNode.html} />
  			</div>
  		</React.Fragment>
  	)
  }
}

export const pageQuery = graphql`
  query DocBySlug($slug: String!) {
    postBySlug: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
      }
    }
    tableOfContents: docsJson {
      chapters {
        title
        entry {
          id
          childMarkdownRemark {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  }
`
