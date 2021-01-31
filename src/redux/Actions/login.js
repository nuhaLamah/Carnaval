//import * as api from '../../api';

export const login = (username, password) => async (dispatch) => {
  try {
    //const response = await api.log({username: username, password: password});
    console.log(username, password)
   // dispatch({ type: 'FETCH_ALL', payload: data.markets });
  } catch (error) {
    console.log(error.message);
  }
};