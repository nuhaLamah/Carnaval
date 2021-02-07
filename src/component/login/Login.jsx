import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

import {login} from '../../redux/Actions/login';
import InputField from './components/InputField';
import ErrorMessage from '../ErrorMessage';

import './Login.css';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState();
    const [isRemember, setIsRemember] = useState(false);
   
    const handleShowPassword = ()=> {
    setShowPassword(!showPassword);
    } 

    const onChangeUsername = (e) => {
    setUsername(e.target.value);
    }

    const onChangePassword = (e) => {
    setPassword(e.target.value);
    }

    const onCheckRememberMe = (e) => {

        setIsRemember(!isRemember);
        console.log(isRemember)
    }

    const onSubmitForm= (e) =>{
        e.preventDefault();
        props.login(username, password, isRemember)
    }


 return  props.logState? <Redirect to="/StoreList" />
    :(
       
        <div className="ui container centered grid log-container">
          
          <form className="ui form segment log-form" onSubmit={onSubmitForm}>
              <div className="field">
              {props.logError? <ErrorMessage head="Login Error" content="Wrong username or password" />:null}
              </div>
            <h4 className="ui header">Login</h4>
                    <InputField title="" type="text" placeholder="Username" onChange={onChangeUsername} icon="user icon" />
                    <InputField title="" type={showPassword ? 'text' : 'password'} placeholder="Password" onChange={onChangePassword} icon="lock icon"/>
                    <div className="field button-container">
                        <button className="fluid ui blue button" type="submit">Login</button>
                    </div>
                    <button onClick={handleShowPassword}>show password</button>
                    <div className="ui checkbox">
                        <input type="checkbox" name="rememberMe" checked={isRemember} onChange={onCheckRememberMe} />
                        <label>Remember me</label>
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