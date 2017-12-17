import React from 'react'

const RadioChecks = (props) => (
    <form className="push-down">
        <label>
            <input type="checkbox" className={`${props.checkcolor}-checkbox`}/>
            <span></span>
        </label>

        <label>
            <input type="radio" name="yow" className={`${props.checkcolor}-checkbox`}/>
            <span></span>
        </label>
        
        <label>
            <input type="radio" name="yow" className={`${props.checkcolor}-checkbox`}/>
            <span></span>
        </label>
    </form>
)

export default RadioChecks