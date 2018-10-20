import React from 'react'
import cx from 'classnames'
import { compose, withStateHandlers } from 'recompose'
import Navbar from './Navbar'
import Hamburger from './Hamburger'
import Sidebar from './Sidebar'
import './styles.scss'

const Header = ({ isOpened, toggleSidebar }) => (
	<div className="header">
		<div className={cx('overlay', { active: isOpened })} onClick={toggleSidebar} />
		<Navbar />
		<Hamburger
			Toggle={toggleSidebar}
			sidebar={isOpened}
		/>
		<Sidebar
			sidebar={isOpened}
			Toggle={toggleSidebar}
		/>
	</div>
)

const enhance = compose(
	withStateHandlers(
		() => ({ isOpened: false }),
		{ toggleSidebar: ({ isOpened }) => () => ({ isOpened: !isOpened }) }
	)
)

export default enhance(Header)
