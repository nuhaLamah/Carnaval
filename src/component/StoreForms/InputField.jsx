import { Block } from '@material-ui/icons';
import React from 'react';

const InputField = ({title, type, name, placeholder, onChange, icon , defaultValue}) => {
    return(
        <div className="field">
                <label>{title}</label>
                <div className="ui right icon input" style={{display:Block}}>
                    <input  type={type} name={name} placeholder={placeholder} onChange={onChange} defaultValue={defaultValue}/>
                    <i className={icon}></i>
                </div>
        </div>
    )
}

export default InputField;