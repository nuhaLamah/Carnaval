//  not found component - 404 
import React from 'react';
import logo from '../image/logo.png';

const NotFound = () => {

    return(
        <>
        <div style={{height:'100px'}}></div> 
        {/* main container */}
            <div className="ui container centered grid reg-container" > 
                <div className="ui form segment log-form" >
                {/* logo image */}
                <img className="ui centered medium image" alt="logo" src={logo}/>
                {/* main text */}
                <h1 style={{textAlign:'center', fontFamily: 'inherit', fontSize: "120px"}}> 404 </h1>
                <h2 style={{textAlign:'center', fontFamily: 'inherit'}}> عفوا لم يتم العثور على الصفحة! </h2>
                {/* back button */}
                <div className="field"> 
                <a href="https://misratafestival.ly/"><button className="ui button text"  type="submit">الرجوع إلى الرئيسية</button></a>
                </div>
                </div>
            </div>
            
        <div style={{height:'80px'}}></div> 
        </>
        )
}

export default NotFound;