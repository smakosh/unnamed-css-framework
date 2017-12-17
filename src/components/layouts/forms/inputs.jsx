import React from 'react'

const Inputs = (props) => (
    <form className="row">
        <div className={`input-field ${props.color}-input column column-first xlarge-6 small-12`}>
            <span className="user-icon"></span>
            <input type="text" />
        </div>
        <div className={`input-field ${props.color}-input column column-last xlarge-6 small-12`}>
            <span className="email-icon"></span>
            <input type="email" placeholder="Enter your email..." />
        </div>
        <div className={`input-field ${props.color}-input column column-first xlarge-6 small-12`}>
            <select>
                <option value="">Aye sir!</option>
                <option value="">Meh</option>
                <option value="">much Aye sir!</option>
            </select>
        </div>
        <div className={`input-field ${props.color}-input text-area-field column column-last xlarge-6 small-12`}>
            <span className="edit-icon"></span>
            <textarea></textarea>
        </div>
    </form>
)

export default Inputs