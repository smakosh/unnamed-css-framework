import React from 'react'
import { Link } from 'react-router-dom'

import '../../styles/footer.css'

const KeyCDN = 'https://www.keycdn.com/?ref=unnamed'
const Smakosh = 'http://smakosh.com'

const Footer = () => (
    <div className="container footer">
        <a href="#top">To the top</a>
        <a target="_blank" href={KeyCDN}>Accelerated by KeyCDN</a>
        <Link to="/">© Unnamed | All rights reserved 2017</Link>
        <a target="_blank" href={Smakosh}><span></span> Made by Smakosh</a>
    </div>
)

export default Footer