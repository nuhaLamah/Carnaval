/* Combining all reducers that used in the system 
-store, log in and customer- to be as one main reducer
*/
import {combineReducers} from 'redux';

import storeReducer from './storeReducer';
import loginReducer from './loginReducer';
import customerReducer from './customerReducer';

export default combineReducers({
    stores: storeReducer,
    loginInfo: loginReducer,
    customer : customerReducer

})