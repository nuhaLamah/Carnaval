import {combineReducers} from 'redux';

import storeReducer from './storeReducer';
import loginReducer from './loginReducer';
import customerReducer from './customerReducer';
import storeListReducer from './storeListReducer';

export default combineReducers({
    stores: storeReducer,
    loginInfo: loginReducer,
    customer : customerReducer,
    storeList: storeListReducer

})