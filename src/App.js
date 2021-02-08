import React, { useEffect }  from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import StoreList from './component/StoresDisplay/StoreList';
import Print from './component/StoresDisplay/Print';
import CustomerRegForm from './component/customer/CustomerRegForm'
import Login from './component/login/Login'
import Store from './component/StoreForms/StoreAddress'
import SuccessReg from './component/StoreForms/SuccessReg';
<<<<<<< HEAD
import QrReader from './component/QrReader/QrReader';
import SuccessPage from './component/SuccessMsgPage';
=======
import QrReader from './component/qrReader/QrReader';
>>>>>>> 5b41ff9e598f0daccfc70aecd9a3c5f0d5c83ebc
import Demo from './component/customer/CustomerForm';

const App = (props)=> {
  const DirectToLogin = () => <Redirect to="/login" />;
  useEffect(()=>{
   
  }, [])

  return (
    <Router>
    
    <Switch>
         <Route path="/login" exact component={Login}/>
         <Route path="/StoreList"  component={!props.isLog? DirectToLogin: StoreList}/>
         <Route path="/Store"  component={Store}/>
         <Route path="/RegisterCustomer"  component={CustomerRegForm}/>
         <Route path="/Success/:StoreCode"  component={SuccessReg}/>
         <Route path="/Success"  component={SuccessReg}/>
         <Route path="/QRCode/:name"  component={!props.isLog? DirectToLogin: Print}/>
         <Route path="/QRCode/:code"  component={!props.isLog? DirectToLogin: Print}/>
         <Route path="/QrReader"  component={QrReader} />
         <Route path="/Demo"  component={Demo} />
    </Switch>
   
    </Router>
  );
}

const mapStateToProps = ({loginInfo})=>{

  const isLog =  loginInfo.logState || (localStorage.getItem('is_log') ==='true');
  return {isLog: isLog};
}

export default connect(mapStateToProps)(App);
