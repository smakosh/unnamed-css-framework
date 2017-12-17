import React from 'react'
const Download = 'http://smakosh.com/unnamed-css.zip'

const Install = () => (
    <div className="container instalation" id="installation">
        <h3 className="title">Installation</h3>
        <div className="divider"></div>

        <h4>Include one of these links:</h4>
        <pre>&lt;link rel="stylesheet" href="http://smakosh.com/unnamed.css"&gt;</pre>
        
        <h4>Minimized</h4>
        <pre>&lt;link rel="stylesheet" href="http://smakosh.com/unnamed.min.css"&gt;</pre>
        
        <h4>CDN</h4>
        <pre>&lt;link rel="stylesheet" href="https://unnamedcss-9a1f.kxcdn.com/unnamed.css"&gt;</pre>
        
        <h4>Minimized</h4>
        <pre>&lt;link rel="stylesheet" href="https://unnamedcss-9a1f.kxcdn.com/unnamed.min.css"&gt;</pre>
        
        <h4 className="download">Or download both:</h4>
        <a 
            href={Download} 
            className="btn btn-rounded btn-outlined purple-btn push-up" 
            download
        >Download</a>
        
        <h4>Or use this starter repository:</h4>
        <pre>git clone https://github.com/smakosh/Unnamed-getting-started.git</pre>
    </div>
)

export default Install