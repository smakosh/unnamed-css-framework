import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Includes/Header'
import 'unnamed'
import './main.scss'
import 'prismjs/themes/prism-tomorrow.css'

const TemplateWrapper = ({ children }) => (
	<div>
		<Helmet
			title="Unnamed css framework"
		/>
		<Header />
		<div style={{ paddingTop: '3rem', minHeight: '100vh' }}>
			{children()}
		</div>
	</div>
)

export default TemplateWrapper
