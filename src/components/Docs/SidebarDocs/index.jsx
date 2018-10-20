import React from 'react'
import cx from 'classnames'
import { Link } from 'gatsby'
import './styles.scss'

const SidebarDocs = ({ isToggled, chapters, selectedDocBySlug, selected }) => (
	<div className={cx('docs-sidebar', { active: isToggled })}>
		<div className="tabs">
			{chapters.map(chapter => (
				<Link
					key={chapter.entry.id}
					onClick={() => selectedDocBySlug(chapter.entry.childMarkdownRemark.fields.slug)}
					className={cx({ current: chapter.entry.childMarkdownRemark.fields.slug === selected })}
					to={chapter.entry.childMarkdownRemark.fields.slug}
				>
					{chapter.title}
				</Link>
			))}
		</div>
	</div>
)

export { SidebarDocs }
