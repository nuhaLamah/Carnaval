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

function App() {
  return (
    <div className="App">
    <header className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <h1 className="App-title">مهرجان مصراتة للتسوق</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <StoreRegisterForm className="App-intro" />
          </Route>
          <Route path='/stores'>
            <StoreList className="App-intro" />
          </Route>
        </Switch>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
