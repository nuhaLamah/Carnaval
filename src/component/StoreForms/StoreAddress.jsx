import React, { useState , useEffect} from 'react';
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
    useEffect(() => {
        if(storeDefaultData.status === 'valid' ) 
        setShowButton(true) 
    },[storeDefaultData.status]);

    const handleAdressSubmit = (e) =>{
        e.preventDefault();
        const {code , number} = address
        if(code && number)
        {
            //console.log(`${address.code}+${address.number}`);
            dispatch(checkAddress(`${address.code}+${address.number}`));
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
        <h2 style={{textAlign:'center', fontFamily: 'inherit'}}>نموذج  التسجيل </h2>
        {/* --------- Makani validation ------------ */}
        <div className="ui form">
        <div className="field">
            <label className="text">الرمز البريدي</label>
            <input type="text" name="code" onChange ={handleChange} placeholder="الرمز البريدي"/>
        </div>
        <div className="field">
            <label className="text" >رقم المبنى</label>
            <input type="text" name="number" placeholder="رقم المبنى" onChange ={handleChange}/>
        </div>
        <div className="field">
        {!showButton ? (<button className="ui button text" type="submit" onClick={handleAdressSubmit}>تحقق</button>):<></>}
        </div>
        </div>
        </form>
        
        {/* --------- divider ------------ */}
        {showButton ? (
            <div className="ui section divider"></div>
        ):<></>}
        {/* --------- Store Rgisteration ------------ */}
        {showButton ? (
            <StoreData storeDefaultData={storeDefaultData} address={address} showButton={showButton}/>
        ):<></>}
        </div>

       
        </div>
    );
}

export default StoreAddress ;   

