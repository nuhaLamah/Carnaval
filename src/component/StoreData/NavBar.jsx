
import React from 'react';


const NavBar = (props) => {
    return(
        <div class="ui large menu">
            <a href="/" class="active item">
                Home
            </a>
            <div class="item">
                    <div class="ui red button">Sign out</div>
                </div>
            <div class="left item">
                {props.children}
            </div>
         

            
        </div>
    )
}

export default NavBar;