import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

import {login} from '../../redux/Actions/login';
import InputField from './components/InputField';
import ErrorMessage from '../ErrorMessage';

import logo from '../../image/logo.png';
import './Login.css';

const Login = (props) => {
    const [loginData, setLoginData] = useState({username: '', password: ''});
   
    const [isShowPassword, setIsShowPassword] = useState(false);
 
   
    const showPassword = ()=> {
        console.log('show')
    setIsShowPassword(!isShowPassword);
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
       
        <div className="ui container centered grid center-all">
          
          <form className="ui form segment log-form" onSubmit={onSubmitForm}>
          <img  className="ui centered medium image" src={logo} />
              <div className="field">
              {props.logError? <ErrorMessage head="Login Error" content="Wrong username or password" />:null}
              </div>
            <h4 className="ui header title" >تسجيل الدخول</h4>
            <p style={{padding: '5px'}}></p>
                    <InputField name="username" type="text" placeholder="Username" onChange={onChangeInput} icon="user icon" />
                    <p style={{padding: '1.5px'}}></p>
                    <InputField name="password" type={isShowPassword ? 'text' : 'password'} placeholder="Password" onChange={onChangeInput} 
                    icon={isShowPassword? 'icon eye': 'icon eye slash'} onIconClick = {showPassword}/>
                  
                  
                    <div className="field">
                        <center>
                        <button className="fluid ui big button log-btn" type="submit">دخول</button>
                        </center>
                    </div>
                    
                    
            </form>
            </div>
           
       
    )
}

const mapStateToProps = ({loginInfo}) => {
    console.log(loginInfo.logState)
return {logState: loginInfo.logState, logError: loginInfo.logError}
}

export default connect(mapStateToProps, {login})(Login);