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
        <h3>Congratulation!<br/> You have succefully registred</h3>
        <h2 className="code">Your code is :{`${match.params.StoreCode}`}</h2>
        </div>
        <div className="ui section divider"></div>
        <div className="field"> 
        <Link to={'/'}><button className="ui button text"  type="submit">back to home </button></Link>
        </div>
        </div>
        </div>
    )
}

export default SuccessReg;