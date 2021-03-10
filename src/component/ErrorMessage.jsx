///////////////////////////////////////////////////////////////////////////////////////
//A message to show when an error occur.
///////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
// Error message component  takes props as component property
const ErrorMessage = (props) => {
    return (
        <div className="ui negative message">
            <div className="header">
                {props.head}
            </div>
            <p>{props.content}
            </p></div>
    );
}

export default ErrorMessage;