import React, {useState} from 'react';
import { connect } from 'react-redux';


import {login} from '../../redux/Actions/login';
import InputField from './components/InputField';

import './Login.css';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
   

    const onChangeUsername = (e) => {
    setUsername(e.target.value);
    }
    const onChangePassword = (e) => {
    setPassword(e.target.value);
    }
    const onSubmitForm= (e) =>{
        e.preventDefault();
        console.log(password, username)
        props.login(username, password)
    }
    return(
       
        <div className="ui container centered grid log-container">
          
          <form className="ui form segment log-form" onSubmit={onSubmitForm}>
            <h4 className="ui header">Login</h4>
                    <InputField title=""  placeholder="Username" onChange={onChangeUsername} icon="user icon" />
                    <InputField title=""  placeholder="Password" onChange={onChangePassword} icon=""/>
                    <div className="field button-container">
                    
                        <button className="fluid ui blue button" type="submit">Login</button>
                   
                    </div>
            </form>
            </div>
           
       
    )
}

const mapStateToProps = (state) => {
    console.log(state)
return {state: ""}
}

export default connect(mapStateToProps, {login})(Login);