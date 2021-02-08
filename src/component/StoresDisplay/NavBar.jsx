
import React from 'react';
import { useDispatch } from 'react-redux';

import {logout} from '../../redux/Actions/login';

const NavBar = (props) => {
    const dispatch = useDispatch();

    const onClickSignOut = () => {
        console.log('sign out');
    
        dispatch(logout())
    }
    return(
        <div className="ui large menu" style={{position: 'fixed',  top: 10, width: "100%", background: '#ffffff', zIndex: 100}}>
            <a href="/StoreList" className="active item">
                Home
            </a>
            <div className="item" onClick={onClickSignOut} style={{cursor: 'pointer'}}>
                   Sign-Out
            </div>
            <div className="left item">
                {props.children}
            </div>
         

            
        </div>
    )
}

export default NavBar;