import React, { Component } from 'react'

const Column = (props) => (
    <div className="column xlarge-2 large-2 medium-12 small-12">
        <div className="columns">
            <p>{props.column}</p>
        </div>
    </div>
)

export default class TwoEach extends Component {
    state = {
        columns: [2, 2, 2, 2, 2, 2]
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {
                        this.state.columns.map((column, index) => {
                            return <Column column={column} key={index} />
                        })
                    }
                </div>
            </div>
        )
    }
}