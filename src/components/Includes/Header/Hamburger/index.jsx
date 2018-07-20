import React from 'react'
import cx from 'classnames'
import './styles.scss'

const Hamburger = ({ sidebar, Toggle }) => (
	<div className={cx('hamburger', { active: sidebar })} onClick={Toggle}>
		<div className="top" />
		<div className="mid" />
		<div className="bottom" />
	</div>
)

export default Hamburger
