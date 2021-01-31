
const loginReducer = (state={} , action)=>{
    switch (action.type){
        case 'LOGIN_INFO':
            return {...state, loginData: action.payload};
        case 'CHANGE_LOG_STATE':
            return {...state, state: action.payload};  
        default:
             return state;     
       
    }
}

export default loginReducer;