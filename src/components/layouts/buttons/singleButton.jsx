import React from 'react'

const SingleButton = (props) => (
    <div className="type-buttons">
        <button type="button" className={`btn btn-primary gradient-${props.gradient}`}>btn-primary</button>
        <button type="button" className={`btn btn-rounded gradient-${props.gradient}`}>btn-rounded</button>
        <button type="button" className={`btn btn-rounded btn-outlined ${props.gradient}-btn`}>btn-outlined</button>
    </div>
        )
export default SingleButton