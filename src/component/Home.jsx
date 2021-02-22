import React from 'react';
import logo from '../image/logo.png';
import Footer from './Footer/Footer';
import './Footer/style.css'
const Home = () => {
return (
    <div className="main-container ">
    <div className="ui container grid centered" > 
        <div className="ui form segment log-form" >
        
        <img className="ui centered large image" alt="logo" src={logo}/>
        <div className="ui section divider"></div>
        <h2 style={{textAlign:'center', fontFamily: 'inherit'}}> مهرجان مصراتة للتسوق 2021 </h2>
        </div>
       
    </div>
    <div className="footer">
    <Footer />
    </div>
    </div>
)
}
export default Home;