import {combineReducers} from 'redux';

import storeRegReducer from './storeRegReducer';
import loginReducer from './loginReducer';
import customerReducer from './customerReducer';

export default combineReducers({
    stores: storeRegReducer,
    loginInfo: loginReducer,
    customer : customerReducer

})