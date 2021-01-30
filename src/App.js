import React , {useEffect} from 'react';
import './App.css'
import StoreRegisterForm from './component/storeForm/StoreRegisterForm';
<<<<<<< HEAD
import StoreList from './component/storesList/StoreList';
import Login from './component/login/Login';
=======
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import StoreList from './component/StoreData/StoreList';
import {getStores }from './redux/Actions/stores';
import {useDispatch} from 'react-redux'
import Store from './component/StoreData/Store';
import Login from './component/login/Login'
>>>>>>> 4e2bbfda442a9710d44717860e5547afd97c37dd

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStores());
  }, [dispatch]);

  return (
    <Router>
     
    <div className="App">
<<<<<<< HEAD

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
    
=======
    <header className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <h1 className="App-title">مهرجان مصراتة للتسوق</h1> */}
      {/* <StoreRegisterForm className="App-intro" /> */}
      {/* <StoreList className="App-intro" /> */}
      </header>
>>>>>>> 4e2bbfda442a9710d44717860e5547afd97c37dd
    </div>

    <Switch>
         <Route path="/" exact component={Login}/>
         <Route path="/StoreList"  component={StoreList}/>
         <Route path="/StoreRegisterForm"  component={StoreRegisterForm}/>
         <Route path="/Store/:title"  component={Store}/>
    </Switch>
   
    </Router>
  );
}

export default App;
