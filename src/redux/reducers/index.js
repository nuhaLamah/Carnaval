import {combineReducers} from 'redux';

import storeRegReducer from './storeRegReducer';
import loginReducer from './loginReducer';

export default combineReducers({
    stores: storeRegReducer,
    loginInfo: loginReducer
})