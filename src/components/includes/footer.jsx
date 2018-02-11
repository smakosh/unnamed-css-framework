import React from 'react'
import { Link } from 'react-router-dom'

import '../../styles/footer.css'

const Smakosh = 'http://smakosh.com'

const Footer = () => (
    <div className="container footer">
        <Link to="/">© Unnamed | All rights reserved {(new Date()).getFullYear()}</Link>
        <Link target="_blank" to={Smakosh}><span></span> Made by Smakosh</Link>
    </div>
)

export default Footer
