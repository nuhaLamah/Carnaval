import React , {useEffect} from 'react';
import StoreRegisterForm from './component/storeForm/StoreRegisterForm';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import StoreList from './component/StoreData/StoreList';
import {getStores }from './redux/Actions/stores';
import {useDispatch} from 'react-redux'
import Store from './component/StoreData/Store';
import RegStoreForm from './component/storeForm/StoreRegisterForm'
import Login from './component/login/Login'
import CustomerRegForm from './component/customer/CustomerRegForm'


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStores());
  }, [dispatch]);

  return (
    <Router>
    
    <Switch>
         <Route path="/" exact component={Login}/>
         <Route path="/StoreList"  component={StoreList}/>
         <Route path="/RegsterStore"  component={RegStoreForm}/>
         <Route path="/RegisterCustomer"  component={CustomerRegForm}/>
         <Route path="/StoreRegisterForm"  component={StoreRegisterForm}/>
         <Route path="/Store/:title"  component={Store}/>
    </Switch>
   
    </Router>
  );
}

export default App;
