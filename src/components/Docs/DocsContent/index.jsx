import React from 'react'
import './styles.scss'

const DocsContent = ({ title, content }) => (
	<div className="docs-content">
		<h1>{title}</h1>
		<div
			className="blog-post-content"
			dangerouslySetInnerHTML={{ __html: content }}
		/>
	</div>
)

export { DocsContent }
