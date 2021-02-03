import React  from 'react';
import { connect } from 'react-redux';
import StoreRegisterForm from './component/StoreForms/storeForm/StoreRegisterForm';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import StoreList from './component/StoreData/StoreList';
import StoreData from './component/StoreForms/storeData/StoreData'
import Print from './component/StoreData/Print';
import Store from './component/StoreData/Store';
import CustomerRegForm from './component/customer/CustomerRegForm'
import Login from './component/login/Login'
import AddressForm from './component/StoreForms/makaniAddress/AddressForm';


const App = (props)=> {
  const DirectToLogin = () => <Redirect to="/login" />;
  const isLog = props.logState || localStorage.getItem('is_log');
  //console.log(isLog);
  return (
    <Router>
    
    <Switch>
         <Route path="/login" exact component={Login}/>
         <Route path="/StoreList"  component={!isLog? DirectToLogin: StoreList}/>
         <Route path="/AddressForm"  component={!isLog? DirectToLogin :AddressForm}/>
         <Route path="/Store/:code"  component={StoreData}/>
         <Route path="/RigisterCustomer"  component={!isLog? DirectToLogin :CustomerRegForm}/>
         <Route path="/StoreRegisterForm"  component={!isLog? DirectToLogin :StoreRegisterForm}/>
         <Route path="/Store/:title"  component={!isLog? DirectToLogin :Store}/>
       
         <Route path="/QRCode/:name"  component={!isLog? DirectToLogin: Print}/>
    </Switch>
   
    </Router>
  );
}

const mapStateToProps = ({loginInfo})=>{
return {logState: loginInfo.logState};
}

export default connect(mapStateToProps)(App);
