import React from 'react'
import { Link } from 'react-router-dom'

const githubLink = 'https://github.com/smakosh/unnamed-css-framework'

const Brand = () => (
            <div>
                <Link className="logo" to="/"></Link>
                <h2>Unnamed</h2>
                <p>A colorful css framework made by a human not an Ai</p>
                <a href={githubLink} className="github">Github</a>
            </div>
        )

export default Brand