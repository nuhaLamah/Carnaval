import {log} from '../../api';




export const login = (username, password, isRemember) => async (dispatch) => {
  try {
    console.log(username)
    const {data} = await log({username: username, password: password});
    console.log(data)
   dispatch({ type: 'LOGIN_INFO', payload: data});
   dispatch({ type: 'CHANGE_LOG_STATE', payload: true});
   localStorage.setItem("access_token", data.access_token);
   console.log(localStorage.getItem("access_token"))
   if(isRemember) {
     localStorage.setItem("refresh_token", data.refresh_token);
     localStorage.setItem("is_log", true)
    }
   

  } catch (error) {
    console.log(error.message);
    dispatch({ type: 'LOGIN_ERROR', payload: true});
    dispatch({ type: 'CHANGE_LOG_STATE', payload: false});
  }
};