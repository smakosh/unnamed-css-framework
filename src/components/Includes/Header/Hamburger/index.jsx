import React from 'react'
import cx from 'classnames'
import './styles.scss'

const Hamburger = ({ sidebar, Toggle }) => (
	<div className={cx('hamburger', { active: sidebar })} onClick={Toggle}>
		<div className="top"></div>
		<div className="mid"></div>
		<div className="bottom"></div>
	</div>
)

export default Hamburger
