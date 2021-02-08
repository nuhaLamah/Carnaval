import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../image/logo.png';
import './style.css';

const SuccessReg = ({match}) => {
    console.log(match);
    return (
        <div className="ui container centered grid reg-container" > 
        <div className="ui form segment log-form" >
        
        <img className="ui centered medium image" alt="logo" src={logo}/>
        {/* --------- Makani validation ------------ */}
        <div className="ui form segment success" >
        <h3>لقد تم التسجيل بنجاح</h3>
        {match.params.StoreCode?<h2 className="code">رقم الكود الخاص بك هو :{`${match.params.StoreCode}`}</h2>:<></>}
        </div>
        <div className="ui section divider"></div>
        <div className="field"> 
        {match.params.StoreCode?<Link to={'/'}><button className="ui button text"  type="submit">الرجوع إلى الرئيسية</button></Link>:<></>}
        </div>
        </div>
        </div>
    )
}

export default SuccessReg;