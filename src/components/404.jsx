import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => (
            <div className="container center-text">
                <h2>
                    Page NotFound - 
                    <Link to="/">
                        Go back home!
                    </Link>
                </h2>
            </div>
        )

export default NotFound