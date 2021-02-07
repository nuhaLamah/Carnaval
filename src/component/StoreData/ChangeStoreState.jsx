import React from 'react';
import { useDispatch } from 'react-redux';
import { changeState } from '../../redux/Actions/stores';

const ChangeStoreState = ({storeCode, storeState}) => {
    const dispatch = useDispatch();
    const btnTypeStyle = storeState === 0? {classType: 'basic', text: 'قبول المحل'}:{classType: '', text: ' إلغاء قبول المحل'};
    const onChangeState  = () => {
        const state = storeState===1? 0:1;
        dispatch(changeState(storeCode,state))
    }
    return(
        <div>
            {
                <button className={`ui blue ${btnTypeStyle.classType} button`} style={{fontFamily : 'inherit', width:'140px'}} 
                onClick={onChangeState}>{btnTypeStyle.text}</button>   
            }   
        </div>

        
    )
}

export default ChangeStoreState;