import React, { Component } from 'react'
import '../../../styles/button.css'
import SingleButton from './singleButton'

const Grabient = 'https://www.grabient.com'

export default class Buttons extends Component {
    state = {
        gradients: [
            'black',
            'green',
            'orange',
            'purple'
        ]
    }
    render() {
        return (
            <div className="container buttons" id="doc">
                <h3 className="title">Buttons</h3>
                <div className="divider"></div>

                {
                    this.state.gradients.map((gradient) => {
                        return <SingleButton gradient={gradient} key={gradient} />
                    })
                }

                <h3 className="title">Disabled buttons</h3>
                <div className="divider"></div>

                <div className="type-buttons">
                    <button type="button" className="btn btn-primary" disabled>btn-primary</button>
                    <button type="button" className="btn btn-rounded" disabled>btn-rounded</button>
                    <button type="button" className="btn btn-rounded btn-outlined" disabled>btn-outlined</button>
                </div>

                <h4 className="description">
                    There are 3 types of buttons and you can change the colors just
                    by changing the color name, something like this
                </h4>
                <p>for black use</p> <pre className="little">.gradient-black</pre>
                <p>for purple use</p> <pre className="little">.gradient-purple</pre>
                <p>for orange use</p> <pre className="little">.gradient-orange</pre>
                <p>for green use</p> <pre className="little">.gradient-green</pre>

                <h4 className="description">For the outlined button use these classes</h4>
                <p>for black use</p> <pre className="little">.black-btn</pre>
                <p>for purple use</p> <pre className="little">.purple-btn</pre>
                <p>for orange use</p> <pre className="little">.orange-btn</pre>
                <p>for green use</p> <pre className="little">.green-btn</pre>

                <p>These are the available for now, feel free to visit
                <a className="link" href={Grabient} target="_blank"> Grabient</a> to pick up more colors & add your own classes !</p>

                <div className="code">
                    <h4 className="pad">Buttons</h4>
                    <pre><span className="class-name">.btn btn-hover btn-primary gradient-black</span></pre>
                    <pre><span className="class-name">.btn btn-hover btn-primary gradient-purple</span></pre>
                    <pre><span className="class-name">.btn btn-hover btn-rounded gradient-purple</span></pre>
                    <pre><span className="class-name">.btn btn-rounded btn-outlined purple-btn</span></pre>
                </div>
            </div>
        )
    }
}