import React from 'react'
import cx from 'classnames'
import HamburgerIcon from '../../../../static/icons/hamburger.svg'
import './styles.scss'

const BurgerIcon = ({ toggleSideBar, isToggled }) => (
	<div className={cx('burger', { active: isToggled })} onClick={toggleSideBar}>
		<img src={HamburgerIcon} alt="open menu" />
	</div>
)

export { BurgerIcon }
