import React from 'react'

const Github = () => (
    <div className="github-buttons">
        <iframe 
            className="iframe" 
            src="https://ghbtns.com/github-btn.html?user=smakosh&repo=unnamed-css-framework&type=star&count=true"
            frameBorder="0" 
            scrolling="0" 
            width="90px" 
            height="20px"
            title="stars"
        >
        </iframe>
        <iframe 
            className="iframe forkit" 
            src="https://ghbtns.com/github-btn.html?user=smakosh&repo=unnamed-css-framework&type=fork&count=true"
            frameBorder="0" 
            scrolling="0" 
            width="90px" 
            height="20px"
            title="forks"
        >
        </iframe>
    </div>
)

export default Github