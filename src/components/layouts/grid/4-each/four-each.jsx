import React, { Component } from 'react'

const Column = (props) => (
    <div className="column xlarge-4 large-4 medium-12 small-12">
        <div className="columns">
            <p>{props.column} Columns</p>
        </div>
    </div>
)

export default class FourEach extends Component {
    state = {
        columns: [4, 4, 4]
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