import React from 'react'
import { siteName } from '../../data/Config'
import { Layout, SEO } from '../components/common'

const NotFoundPage = () => (
	<Layout>
		<SEO title={`${siteName} | 404 Page Not Found`} />
		<h1>404 - Page Not Found</h1>
	</Layout>
)

export default NotFoundPage
