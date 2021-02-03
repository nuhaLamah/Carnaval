import React  from 'react';
import { connect } from 'react-redux';
import StoreRegisterForm from './component/storeForm/StoreRegisterForm';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import StoreList from './component/StoreData/StoreList';
import Print from './component/StoreData/Print';
import Store from './component/StoreData/Store';
import CustomerRegForm from './component/customer/CustomerRegForm'
import RegStoreForm from './component/storeForm/StoreRegisterForm'
import Login from './component/login/Login'
import AddressForm from './component/makaniAddress/AddressForm';

const App = (props)=> {
  const DirectToLogin = () => <Redirect to="/login" />;
  

  return (
    <Router>
    
    <Switch>
         <Route path="/login" exact component={Login}/>
         <Route path="/StoreList"  component={!props.isLog? DirectToLogin: StoreList}/>
         <Route path="/AddressForm"  component={AddressForm}/>
         <Route path="/RegsterStore"  component={RegStoreForm}/>
         <Route path="/RegisterCustomer"  component={CustomerRegForm}/>
         <Route path="/StoreRegisterForm"  component={StoreRegisterForm}/>
         <Route path="/Store/:title"  component={!props.isLog? DirectToLogin :Store}/>
         <Route path="/QRCode/:name"  component={!props.isLog? DirectToLogin: Print}/>
    </Switch>
   
    </Router>
  );
}

const mapStateToProps = ({loginInfo})=>{
  console.log('log state', loginInfo.logState);
  const isLog =  loginInfo.logState || !!!localStorage.getItem('is_log');
  console.log(isLog)
return {isLog: isLog};
}

export default connect(mapStateToProps)(App);
