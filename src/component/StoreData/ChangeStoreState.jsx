import React, { useState } from 'react';
import { useDispatch } from 'react-redux';


const ChangeStoreState = ({storeState}) => {
    const dispatch = useDispatch();
    const btnType = storeState === 0? 'basic':'';
    return(
        <div>
            {
                <button class={`ui blue ${btnType} button`} onClick={()=> dispatch()}>Change state</button>
                
            }   
        </div>

        
    )
}

export default ChangeStoreState;