import React from 'react';

const PageButtons = () => {
    return(
        <div className ="container">
        <div class="ui center aligned ten column grid">
            <div class="row">
        <button class="ui column right labeled icon button">
            Forward
            <i class="right chevron icon"></i>
        </button>

        <div class="ui center aligned column">
            Page Number
        </div>

        <button class="ui column labeled icon button">
            <i class="left chevron icon"></i>
            Back
        </button>
        </div>
        </div>
        </div>
    );
}

export default PageButtons;