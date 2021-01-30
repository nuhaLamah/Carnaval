import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css'
import StoreRegisterForm from './component/storeForm/StoreRegisterForm';
import StoreList from './component/storesList/StoreList';
import Login from './component/login/Login';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <StoreRegisterForm className="App-intro" />
          </Route>
          <Route path='/stores'>
            <StoreList className="App-intro" />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
