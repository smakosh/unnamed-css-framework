import React from 'react'

const Useful = () => (
    <div className="container">
        <h3 className="title">Useful classes</h3>
        <div className="divider"></div>
        <div className="row">
            <div className="column xlarge-6 large-6 medium-12 small-12">
                <h4 className="description">To center, left or right align text use these classes: </h4>
                <p>To center it</p>
                <pre className="little">.center-text</pre>
        
                <p>To left align it</p>
                <pre className="little">.left-text</pre>
        
                <p>To right align it use</p>
                <pre className="little">.right-text</pre>
            </div>
            <div className="column xlarge-6 large-6 medium-12 small-12">
                <h4 className="description">To hide elements:</h4>
                <p>To hide on tablet and down</p>
                <pre className="little">.hide-tablet-down</pre>
        
                <p>To hide on mobile</p>
                <pre className="little">.hide-mobile</pre>
        
                <p>To hide on any screen size</p>
                <pre className="little">.hide</pre>
            </div>
        </div>
    </div>
)

export default Useful