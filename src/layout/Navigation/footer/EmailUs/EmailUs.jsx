import React from 'react'
import "./emailUs.css"
const EmailUs = props => {
    return (
        <div className="email-us">
            <img className="foot-logo" src={props.uri} alt="logo"></img>
            <a className="email-link" href={"mailto:"+props.email}>Suggestions</a>
        </div>
    )
}

export default EmailUs
