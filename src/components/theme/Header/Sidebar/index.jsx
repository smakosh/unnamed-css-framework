import React from 'react'
import cx from 'classnames'
import NavLinks from '../NavLinks'
import './styles.scss'

const Sidebar = ({ sidebar, Toggle }) => (
	<div className={cx('sidebar-header', { active: sidebar })}>
		<div className="items" onClick={Toggle}>
			<NavLinks />
		</div>
	</div>
)

export default Sidebar
