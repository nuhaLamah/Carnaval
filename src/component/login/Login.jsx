import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

import {login} from '../../redux/Actions/login';
import InputField from './components/InputField';
import ErrorMessage from '../ErrorMessage';

import './Login.css';

const Login = (props) => {
    const [loginData, setLoginData] = useState({username: '', password: ''});
   
    const [showPassword, setShowPassword] = useState();
 
   
    const handleShowPassword = ()=> {
    setShowPassword(!showPassword);
    } 

    const onChangeInput = (e) => {
    setLoginData({...loginData, [e.target.name]: e.target.value});
    }

   

  

    const onSubmitForm= (e) =>{
        e.preventDefault();
        props.login(loginData)
    }


 return  props.logState? <Redirect to="/StoreList" />
    :(
       
        <div className="ui container centered grid log-container">
          
          <form className="ui form segment log-form" onSubmit={onSubmitForm}>
              <div className="field">
              {props.logError? <ErrorMessage head="Login Error" content="Wrong username or password" />:null}
              </div>
            <h4 className="ui header">Login</h4>
                    <InputField name="username" type="text" placeholder="Username" onChange={onChangeInput} icon="user icon" />
                    <InputField name="password" type={showPassword ? 'text' : 'password'} placeholder="Password" onChange={onChangeInput} icon="lock icon"/>

                    <div className="field button-container">
                        <button className="fluid ui blue button" type="submit">Login</button>
                    </div>
                    <button onClick={handleShowPassword}>show password</button>
                    
            </form>
            </div>
           
       
    )
}

const mapStateToProps = ({loginInfo}) => {
    console.log(loginInfo.logState)
return {logState: loginInfo.logState, logError: loginInfo.logError}
}

export default connect(mapStateToProps, {login})(Login);