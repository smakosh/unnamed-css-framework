import React from 'react'

import Drone2 from '../../../assets/drone2.jpg'

const ResponsiveImg = () => (
    <div className="container">
        <h3 className="title">Responsive image</h3>
        <div className="divider"></div>
        <div className="responsive-image">
        <img src={Drone2} alt="LA beach from the sky" />
        </div>
    </div>
)

export default ResponsiveImg