import React from 'react';
import './App.css'
//import StoreRegisterForm from './component/storeForm/StoreRegisterForm';
import StoreList from './component/storesList/StoreList';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <h1 className="App-title">مهرجان مصراتة للتسوق</h1>
      
      {/* <StoreRegisterForm className="App-intro" /> */}
      <StoreList className="App-intro" />
      </header>
    </div>
  );
}

export default App;
