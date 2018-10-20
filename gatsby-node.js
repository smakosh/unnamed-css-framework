const path = require('path')
const _ = require('lodash')

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions
	let slug = '/docs/'
	if (node.internal.type === 'MarkdownRemark') {
		const fileNode = getNode(node.parent)
		const parsedFilePath = path.parse(fileNode.relativePath)
		if (
			Object.prototype.hasOwnProperty.call(node, 'frontmatter')
			&& Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
		) {
			slug += `${_.kebabCase(node.frontmatter.slug)}`
		}
		if (
			Object.prototype.hasOwnProperty.call(node, 'frontmatter')
			&& Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
		) {
			slug += `${_.kebabCase(node.frontmatter.title)}`
		} else if (parsedFilePath.name !== 'index' && parsedFilePath.dir !== '') {
			slug += `${parsedFilePath.dir}/${parsedFilePath.name}/`
		} else if (parsedFilePath.dir === '') {
			slug += `${parsedFilePath.name}/`
		} else {
			slug += `${parsedFilePath.dir}/`
		}
		createNodeField({ node, name: 'slug', value: slug })
	}
}

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions

	return new Promise((resolve, reject) => {
		const docItemPage = path.resolve('src/templates/item.jsx')

		graphql(`
			{
				allMarkdownRemark {
					edges {
						node {
							frontmatter {
								title
							}
							fields {
								slug
							}
						}
					}
				}
			}`)
			.then(result => {
				if (result.errors) {
					return reject(result.errors)
				}

				return result.data.allMarkdownRemark.edges.forEach(edge => {
					createPage({
						path: edge.node.fields.slug,
						component: docItemPage,
						context: {
							slug: edge.node.fields.slug,
						},
					})

					resolve()
				})
			})
	})
}
