
const loginReducer = (state={logState:false, logData: {}} , action)=>{
    console.log(action.payload)
    switch (action.type){
        case 'LOGIN_INFO':
            return {...state, logData: action.payload};
        case 'CHANGE_LOG_STATE':
            
            return {...state, logState: action.payload};  
        default:
             return state;     
       
    }
}

export default loginReducer;