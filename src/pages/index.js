import React from 'react'
import { title } from '../../data/Config'
import { Layout, SEO } from '../components/common'
import Intro from '../components/Landing/Intro'

const IndexPage = () => (
	<Layout>
		<SEO title={title} />
		<Intro />
	</Layout>
)

export default IndexPage
