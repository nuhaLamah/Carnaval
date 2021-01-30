import React from 'react';
import InputField from './components/InputField';
import './Login.css';

const Login = () => {
    return(
       
        <div class="ui container centered grid log-container">
          
          <form className="ui form segment log-form">
            <h4 class="ui header">Login</h4>
                    <InputField title=""  placeholder="Username" icon="user icon" />
                    <InputField title=""  placeholder="Password" icon="lock icon"/>
                    <div className="field button-container">
                        <button className="fluid ui blue button" type="submit">Login</button>
                    </div>
            </form>
            </div>
           
       
    )
}

export default Login;