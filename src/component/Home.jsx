import React from 'react';
import logo from '../image/logo.png';

import './Footer/style.css'
const Home = () => {
return (
    <div>
        <div style={{height:'100px'}}></div> 
            <div className="ui container centered grid reg-container" > 
                <div className="ui form segment log-form" >
                
                <img className="ui centered large image" alt="logo" src={logo}/>
                <div className="ui section divider"></div>
                <h2 style={{textAlign:'center', fontFamily: 'inherit'}}> مهرجان مصراتة للتسوق 2021 </h2>
                </div>
            </div>
        <div style={{height:'100px'}}></div> 
    </div>
)
}
export default Home;