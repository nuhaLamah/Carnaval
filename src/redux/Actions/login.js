<<<<<<< HEAD
//import * as api from '../../api';
=======
import {log} from '../../api';
import { Redirect } from "react-router-dom";

>>>>>>> b7e8921f57740c4040effb9e8e684e1de4831d6a

export const login = (username, password) => async (dispatch) => {
  try {
    console.log(username)
    const {data} = await log({username: username, password: password});
    console.log(data)
   dispatch({ type: 'LOGIN_INFO', payload: data});
   dispatch({ type: 'CHANGE_LOG_STATE', payload: true});
   

  } catch (error) {
    console.log(error.message);
    dispatch({ type: 'CHANGE_LOG_STATE', payload: false});
  }
};