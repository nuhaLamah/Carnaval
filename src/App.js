<<<<<<< HEAD
import React , {useEffect} from 'react';
import './App.css'
import StoreRegisterForm from './component/storeForm/StoreRegisterForm';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import StoreList from './component/StoreData/StoreList';
import {getStores }from './redux/Actions/stores';
import {useDispatch} from 'react-redux'
import Store from './component/StoreData/Store';
import React from 'react';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStores());
  }, [dispatch]);

  return (
    <Router>

     
    <div className="App">
    <header className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <h1 className="App-title">مهرجان مصراتة للتسوق</h1>
      {/* <StoreRegisterForm className="App-intro" /> */}
      {/* <StoreList className="App-intro" /> */}
      </header>
    </div>

    <Switch>
         <Route path="/" exact component={StoreList}/>
         <Route path="/StoreRegisterForm"  component={StoreRegisterForm}/>
         <Route path="/Store/:title"  component={Store}/>
    </Switch>
   
    </Router>
  );
}

export default App;
