import React from 'react';

const PageButtons = () => {
    return(
        <div className ="container">
        <div className="ui center aligned ten column grid">
            <div class="row">
        <button class="ui column right labeled icon button">
            Forward
            <i className="right chevron icon"></i>
        </button>

        <div className="ui center aligned column">
            Page Number
        </div>

        <button className="ui column labeled icon button">
            <i className="left chevron icon"></i>
            Back
        </button>
        </div>
        </div>
        </div>
    );
}

export default PageButtons;