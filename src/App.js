import React from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import StoreList from './component/StoresDisplay/StoreList';
import Print from './component/StoresDisplay/Print';
import Login from './component/login/Login';
import Store from './component/StoreForms/StoreAddress'
import SuccessReg from './component/StoreForms/SuccessReg';
import QrReader from './component/QrReader/QrReader';
import Customer from './component/Customer/CustomerForm';
import Home from './component/Home';
import Footer from './component/Footer';

const App = (props)=> {
  const DirectToLogin = () => <Redirect to="/fs-com-e" />;

 
  return (
    <div className="">
      
    <Router>
      <Switch>
          <Route path="/" exact component={Home}/> Main page
          <Route path="/fs-com-e" exact component={Login}/> {/* Login Form */}
          <Route path="/fs-com-e/StoreList"  component={!props.isLog? DirectToLogin: StoreList}/> {/* Store List Page */}
          <Route path="/Store"  component={Store}/> {/* Store Regiteration Form */}
          <Route path="/Success/:StoreCode"  component={SuccessReg}/> {/* Success Store Regiteration Page */}
          <Route path="/Success"  component={SuccessReg}/> {/* Success Customer Regiteration Page */}
          <Route path="/fs-com-e/QrCode/:code"  component={!props.isLog? DirectToLogin: Print}/> {/* Print QR Code */}
          <Route path="/Scan"  component={QrReader} />   {/* QR Reader Page */}
          <Route path="/Customer/:storeCode"  component={Customer} />   {/* Customer Regiteration Form */}
          <Route exact path="/website" render={() => (window.location = "https://misratafestival.ly")} />
      </Switch>
    </Router>
  
    
    </div>
  );
}

const mapStateToProps = ({loginInfo})=>{

  const isLog =  loginInfo.logState || (localStorage.getItem('is_log') ==='true');
  return {isLog: isLog};
}

export default connect(mapStateToProps)(App);
