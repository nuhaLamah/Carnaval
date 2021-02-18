import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/logo.png';

const Home = () => {
return (
    <div className="ui container grid log-container" > 
        <div className="ui form segment log-form" >
        
        <img className="ui centered medium image" alt="logo" src={logo}/>
        <div className="ui section divider"></div>
        <h2 style={{textAlign:'center', fontFamily: 'inherit'}}> Welcome to the System Dashboard </h2>
        {/* --------- Makani validation ------------ */}
        <center>
        <Link to ={'/QrReader'}><button className="ui button text" type="submit" >Customer</button></Link>
        <Link to ={'/Store'}><button className="ui button text" type="submit" >Store</button></Link>
        <Link to ={'/fs-com-e'}><button className="ui button text" type="submit" >Login</button></Link>
        </center>
        </div>
    </div>
)
}
export default Home;