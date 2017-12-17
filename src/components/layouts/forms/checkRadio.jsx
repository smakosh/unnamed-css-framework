import React, { Component } from 'react';
import RadioChecks from './radiochecks'

import '../../../styles/forms.css'

export default class CheckRadiobuttons extends Component {
    state = {
        checkcolors: [
            'black',
            'green',
            'orange',
            'purple',
        ]
    }
    render() {
        return (
            <div className="container boxes">
                <h3 className="title">Checkboxes & radio buttons</h3>
                <div className="divider meh"></div>

                {
                    this.state.checkcolors.map((checkcolor) => {
                        return <RadioChecks checkcolor={checkcolor} key={checkcolor} />
                    })
                }
                <h4 className="description">
                    Same here you can change the colors just
                    by changing the color name, something like this
                </h4>
                <p>for black use</p> <pre className="little">.black-checkbox</pre>
                <p>for purple use</p> <pre className="little">.purple-checkbox</pre>
                <p>for orange use</p> <pre className="little">.orange-checkbox</pre>
                <p>for green use</p> <pre className="little">.green-checkbox</pre>
    
                <p>
                    These are the available for now, feel free to contribue!
                </p>
            </div>
        )
    }
}