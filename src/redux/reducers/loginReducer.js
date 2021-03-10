/* login Reducer which contain the basic states used for dealing with Admin user 
logData : used to fetch user data from database
logState : detrmine the user state - logged in or not
logError : used if something wrong happend when the user attempts to log in
*/
const loginReducer = (state={logData: {}, logState:false, logError: false} , action)=>{
    // Switch case used for dealing with User Actions and assign value to each state //
    switch (action.type){
        case 'LOGIN_INFO':
            return {...state, logData: action.payload};
        case 'CHANGE_LOG_STATE':
            return {...state, logState: action.payload};
        case 'LOGIN_ERROR':
            return {...state, logError: action.payload};      
        default:
             return state;     
       
    }
}

export default loginReducer;