import {log} from '../../api';

export const login = (username, password, isRemember) => async (dispatch) => {
  try {
    const {data} = await log({username: username, password: password});
   dispatch({ type: 'LOGIN_INFO', payload: data});
   dispatch({ type: 'CHANGE_LOG_STATE', payload: true});
   localStorage.setItem("access_token", data.access_token);
   if(isRemember) {
     localStorage.setItem("refresh_token", data.refresh_token);
     localStorage.setItem("is_log", true);
    }
   

  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', payload: true});
    dispatch({ type: 'CHANGE_LOG_STATE', payload: false});
  }
};

export const logout = () => async(dispatch) =>{
  console.log('out')
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
  localStorage.setItem('is_log', false);
  dispatch({ type: 'CHANGE_LOG_STATE', payload: false});
  console.log(localStorage.getItem('access_token'))
  console.log(localStorage.getItem('refresh_token'))

}