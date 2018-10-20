import React from 'react'
import cx from 'classnames'
import { graphql } from 'gatsby'
import { compose, withStateHandlers, lifecycle } from 'recompose'
import { Layout, SEO } from '../components/common'
import { SidebarDocs, DocsContent, BurgerIcon } from '../components/Docs'

const DocTemplate = ({
	selected, isToggled, toggleSideBar, selectedDoc, selectedDocBySlug, data, pageContext
}) => {
  	const { slug } = pageContext
  	const postNode = data.postBySlug
  	const post = postNode.frontmatter
  	if (!post.id) {
  		post.id = slug
  	}
  	return (
  		<Layout>
  			<SEO
				title={`Unnamed | ${post.title}`}
				location={post.slug}
  			/>
  			<div
  				className={cx('black-overlay', {
  					active: isToggled === true,
  				})}
  				onClick={toggleSideBar}
  			/>
  			<div className="container docs-content-container">
  				<SidebarDocs
  					selected={selected}
  					selectedDocBySlug={selectedDocBySlug}
  					selectedDoc={selectedDoc}
  					chapters={data.tableOfContents.chapters}
  					isToggled={isToggled}
  				/>
  				<BurgerIcon
  					toggleSideBar={toggleSideBar}
  					isToggled={isToggled}
  				/>
  				<DocsContent title={post.title} content={postNode.html} />
  			</div>
  		</Layout>
  	)
}

const enhance = compose(
	withStateHandlers(
		() => ({
			selected: '/docs/getting-started',
			isToggled: false
		}),
		{
			toggleSideBar: ({ isToggled }) => () => ({ isToggled: !isToggled }),
			selectedDoc: () => selected => ({ selected, isToggled: false }),
			selectedDocBySlug: () => selected => ({ selected })
		}
	),
	lifecycle({
		componentDidMount() {
			this.props.selectedDocBySlug(this.props.pageContext.slug)
		}
	})
)

export default enhance(DocTemplate)

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
