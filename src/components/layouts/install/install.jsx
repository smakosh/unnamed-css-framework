import React from 'react'

const Install = () => (
    <div className="container instalation" id="installation">
        <h3 className="title">Installation</h3>
        <div className="divider"></div>
        
        <h4>NPM</h4>
        <pre>npm install --save unnamed</pre>

        <h4>Yarn</h4>
        <pre>yarn add unnamed</pre>

        <h4>CDN</h4>
        <pre>&lt;link rel="stylesheet" href="https://unpkg.com/unnamed"&gt;</pre>
        
        <h4>Or use this starter repository:</h4>
        <pre>git clone https://github.com/smakosh/Unnamed-getting-started.git</pre>
    </div>
)

export default Install
