import React from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
<<<<<<< HEAD
import Login from './component/login/Login'
import Store from './component/StoreForms/StoreAddress'
import SuccessReg from './component/StoreForms/SuccessReg';
import Customer from './component/customer/CustomerForm';
import Home from './component/Home';
import StoreList from './component/StoresDisplay/StoreList';
import Print from './component/StoresDisplay/Print';
import QrReader from './component/qrReader/QrReader';

=======
import StoreList from './component/StoresDisplay/StoreList';
import Print from './component/StoresDisplay/Print';
import Login from './component/login/Login';
import Store from './component/StoreForms/StoreAddress'
import SuccessReg from './component/StoreForms/SuccessReg';
import QrReader from './component/QrReader/QrReader';
import Customer from './component/customer/CustomerForm';
import Home from './component/Home';
>>>>>>> 99ee4d57c8a2aa8d3499a72dd71cdb3593f47e13

const App = (props)=> {
  const DirectToLogin = () => <Redirect to="/login" />;

  return (
    <Router>
    
    <Switch>
         <Route path="/" exact component={Home}/> {/* Login Form */}
         <Route path="/login" exact component={Login}/> {/* Login Form */}
         <Route path="/StoreList"  component={!props.isLog? DirectToLogin: StoreList}/> {/* Store List Page */}
         <Route path="/Store"  component={Store}/> {/* Store Regiteration Form */}
         <Route path="/Success/:StoreCode"  component={SuccessReg}/> {/* Success Store Regiteration Page */}
         <Route path="/Success"  component={SuccessReg}/> {/* Success Customer Regiteration Page */}
         <Route path="/QRCode/:code"  component={!props.isLog? DirectToLogin: Print}/> {/* Print QR Code */}
         <Route path="/QrReader"  component={QrReader} />   {/* QR Reader Page */}
         <Route path="/Customer"  component={Customer} />   {/* Customer Regiteration Form */}
    </Switch>
   
    </Router>
  );
}

const mapStateToProps = ({loginInfo})=>{

  const isLog =  loginInfo.logState || (localStorage.getItem('is_log') ==='true');
  return {isLog: isLog};
}

export default connect(mapStateToProps)(App);
