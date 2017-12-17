import React, { Component } from 'react'
import Inputs from './inputs'

export default class Forms extends Component {
    state = {
        colors: [
            'black',
            'green',
            'orange',
            'purple'
        ]
    }
    render() {
        return (
            <div className="container">
                <h3 className="title">Forms</h3>
                <div className="divider"></div>
        
                {
                    this.state.colors.map((color) => {
                        return <Inputs color={color} key={color} />
                    })
                }
        
                <h4 className="description">
                    Same with inputs you can change the colors just
                    by changing the color name, something like this
                </h4>
                <p>for black use</p> <pre className="little">.black-input</pre>
                <p>for purple use</p> <pre className="little">.purple-input</pre>
                <p>for orange use</p> <pre className="little">.orange-input</pre>
                <p>for green use</p> <pre className="little">.green-input</pre> 
        
                <h4 className="description">
                    You can change also the icon inside each input, something like this
                </h4>
                <p>for email icon use</p> <pre className="little">.email-icon</pre>
                <p>for user icon use</p> <pre className="little">.user-icon</pre>
                <p>for edit icon use</p> <pre className="little">.edit-icon</pre>
        
                <p>
                    These icons & colors are the available ones for now, feel free to add your
                    custom class and simply paste ur font icon as shown in the code bellow
                </p>
            </div>
        )
    }
} 