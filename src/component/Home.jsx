import React from 'react';
import logo from '../image/logo.png';

const Home = () => {
return (
    <div className="ui container grid log-container" > 
        <div className="ui form segment log-form" >
        
        <img className="ui centered large image" alt="logo" src={logo}/>
        <div className="ui section divider"></div>
        <h2 style={{textAlign:'center', fontFamily: 'inherit'}}> مهرجان مصراتة للتسوق 2021 </h2>
        </div>
    </div>
)
}
export default Home;