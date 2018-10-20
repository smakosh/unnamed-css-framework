import React, { Fragment } from 'react'
import Header from '../../theme/Header'
import 'unnamed'
import './main.scss'
import 'prismjs/themes/prism-tomorrow.css'

const Layout = ({ children }) => (
	<Fragment>
		<Header />
		<div style={{ paddingTop: '3rem', minHeight: '100vh' }}>
			{children}
		</div>
	</Fragment>
)

export { Layout }
