import React from 'react'
import { Link } from 'react-router-dom'

const Links = () => (
    <div className="flexed-links">
        <a href="#installation">installation</a>
        <a href="#doc">Documentation</a>
        <Link to="/soon">Templates</Link>
    </div>
)

export default Links