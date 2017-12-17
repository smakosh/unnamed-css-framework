import React, { Component } from 'react'

const Column = (props) => (
    <div className="column xlarge-1 large-1 medium-4 small-12">
        <div className="columns">
            <p>{props.column}</p>
        </div>
    </div>
)

export default class OneEach extends Component {
    state = {
        columns: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    }
    render() {
        return (
            <div className="container">
                <h3 className="title">Grid</h3>
                <div className="divider"></div>
        
                <div className="row">
                    {
                        this.state.columns.map((column) => {
                            return <Column key={column} column={column} />
                        })
                    }
                </div>
                <h4 className="description flexed">Don't forget to put columns inside a <pre className="little">.row</pre> class!</h4>
            </div>
        )
    }
}