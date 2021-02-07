import React, { useEffect }  from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import StoreList from './component/StoreData/StoreList';
import Print from './component/StoreData/Print';
import Store from './component/StoreData/Store';
import CustomerRegForm from './component/customer/CustomerRegForm'
import Login from './component/login/Login'
import Demo from './component/StoreForms/StoreAddress'
import SuccessReg from './component/StoreForms/SuccessReg';
//import AddressForm from './component/StoreForms/makaniAddress/AddressForm';
//import Terms from './component/StoreForms/storeForm/Terms';
import QrReader from './component/qrReader/QrReader';
import SuccessPage from './component/SuccessMsgPage';

const App = (props)=> {
  const DirectToLogin = () => <Redirect to="/login" />;
  useEffect(()=>{
   
  }, [])

  return (
    <Router>
    
    <Switch>
         <Route path="/login" exact component={Login}/>
         <Route path="/StoreList"  component={!props.isLog? DirectToLogin: StoreList}/>
         {/* <Route path="/AddressForm"  component={AddressForm}/> */}
         <Route path="/demo"  component={Demo}/>
         <Route path="/RegisterCustomer"  component={CustomerRegForm}/>
         <Route path="/Success/:StoreCode"  component={SuccessReg}/>
         {/* <Route path="/StoreRegisterForm"  component={StoreRegisterForm}/> */}
         <Route path="/Store/:title"  component={!props.isLog? DirectToLogin :Store}/>
<<<<<<< HEAD
         <Route path="/QRCode/:code"  component={!props.isLog? DirectToLogin: Print}/>
=======
         {/* <Route path="/StoreData/:code"  component={StoreData}/> */}
         <Route path="/QRCode/:name"  component={!props.isLog? DirectToLogin: Print}/>
>>>>>>> 9c86165cd9375ba15ddc70f2acac883e9d66f475
         <Route path="/QrReader"  component={QrReader} />
         <Route path="/done"  component={SuccessPage} />
    </Switch>
   
    </Router>
  );
}

const mapStateToProps = ({loginInfo})=>{

  const isLog =  loginInfo.logState || (localStorage.getItem('is_log') ==='true');
  return {isLog: isLog};
}

export default connect(mapStateToProps)(App);
