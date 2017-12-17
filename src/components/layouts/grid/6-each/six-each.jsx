import React, { Component } from 'react'

const Column = (props) => (
    <div className="column xlarge-6 large-6 medium-12 small-12">
        <div className="columns">
            <p>{props.column} Columns</p>
        </div>
    </div>
)

export default class SixEach extends Component {
    state = {
        columns: [6, 6]
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {
                        this.state.columns.map((column, index) => {
                            return <Column column={column} key={index}/>
                        })
                    }
                </div>
            </div>
        )
    }
}