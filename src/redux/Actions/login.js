import {log} from '../../api';



export const login = (username, password) => async (dispatch) => {
  try {
    console.log(username)
    const {data} = await log({username: username, password: password});
    console.log(data)
   dispatch({ type: 'LOGIN_INFO', payload: data});
   dispatch({ type: 'CHANGE_LOG_STATE', payload: true});
   

  } catch (error) {
    console.log(error.message);
    dispatch({ type: 'LOGIN_INFO', payload: {}});
    dispatch({ type: 'CHANGE_LOG_STATE', payload: false});
  }
};