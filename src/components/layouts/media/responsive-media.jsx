import React from 'react'

import Drone2 from '../../../assets/drone2.jpg'

const videoURL = 'https://www.youtube.com/embed/3ixSvX5-Nsw'

const ResponsiveImg = () => (
    <div className="container">
        <h3 className="title">Responsive media</h3>
        <div className="divider"></div>
        <div className="responsive-image meh">
            <img src={Drone2} alt="LA beach from the sky" />
        </div>

        <div className="responsive-video">
            <iframe 
                title='My trip to Istanbul video'
                width="560" 
                height="315" 
                src={videoURL} 
                frameBorder="0" 
                gesture="media" 
                allow="encrypted-media" 
                allowFullScreen></iframe>
        </div>
    </div>
)

export default ResponsiveImg