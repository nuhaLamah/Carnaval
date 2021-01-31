import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import {login} from '../../redux/Actions/login';
import InputField from './components/InputField';

import './Login.css';

const Login = (props) => {
    return(
       
        <div className="ui container centered grid log-container">
          
          <form className="ui form segment log-form" onSubmit={()=>props.login('dww', 'dd')}>
            <h4 className="ui header">Login</h4>
                    <InputField title=""  placeholder="Username" icon="user icon" />
                    <InputField title=""  placeholder="Passwor icon"/>
                    <div className="field button-container">
                    <Link to = "/StoreList">
                        <button className="fluid ui blue button" type="submit">Login</button>
                    </Link>
                    </div>
            </form>
            </div>
           
       
    )
}

const mapStateToProps = () => {

}

export default connect(mapStateToProps, {login})(Login);