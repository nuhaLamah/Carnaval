import React, { useState } from 'react';
import logo from '../../image/logo.png';
import StoreData from './StoreData';
import { useDispatch , useSelector} from 'react-redux';
import { checkAddress } from '../../redux/Actions/stores';

import './style.css';

const StoreAddress = () =>{
    const dispatch = useDispatch();
    const [address , setAddress] = useState({code:'', number:''});
    const [showButton , setShowButton] = useState(false);
    const storeDefaultData = useSelector((addressData) => addressData.stores.address);
    const handleAdressSubmit = (e) =>{
        e.preventDefault();
        const {code , number} = address
        if(code && number)
        {
            //console.log(`${address.code}+${address.number}`);
            dispatch(checkAddress(`${address.code}+${address.number}`));
            setShowButton(true)
            //setAddress({code:'' , number:''});
        }
        else
        {
            //alert("please check again");
        }
    };
    const handleChange = (e)=>{
        setAddress({...address,[e.target.name]:e.target.value})
    }
    return (
        <div className="ui container centered grid reg-container" > 
        <div className="ui form segment log-form" >
        <form className="ui form" >
        <img className="ui centered medium image" alt="logo" src={logo}/>
        {/* --------- Makani validation ------------ */}
        <div className="ui form">
        <div className="field">
            <label className="text">PostalCode</label>
            <input type="text" name="code" onChange ={handleChange} placeholder="PostalCode"/>
        </div>
        <div className="field">
            <label className="text" >building number</label>
            <input type="text" name="number" placeholder="building number" onChange ={handleChange}/>
        </div>
        <div className="field">
        {!showButton ? (<button className="ui button text" type="submit" onClick={handleAdressSubmit}>Confirm</button>):<></>}
        </div>
        </div>
        </form>
        
        {/* --------- divider ------------ */}
        {showButton ? (
            <div className="ui section divider"></div>
        ):<></>}
        {/* --------- Store Rgisteration ------------ */}
        {showButton ? (
            <StoreData storeDefaultData={storeDefaultData} address={address}/>
        ):<></>}
        </div>

       
        </div>
    );
}

export default StoreAddress ;   

