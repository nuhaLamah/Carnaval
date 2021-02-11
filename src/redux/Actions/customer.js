import * as api from '../../api';

export const addCustomer = (customer) => async (dispatch) => {
  //console.log(customer);
    try {
      const data   = await api.addCustomer(customer);
      //console.log(data);
      dispatch({ type:'SET_IS_DONE', payload:true , data:data});
      dispatch({type:'SET_STORE_INFO', payload: null});
    } catch (error) {
      console.log(error);
      dispatch({ type:'SET_IS_ERROR', payload:true });
    }
  };

  export const clearInfo = () => async (dispatch) => {
      try {
        dispatch({type:'SET_STORE_INFO', payload: null});
        dispatch({type:'SET_IS_DONE', payload: false});
      } catch (error) {
        console.log(error);
        dispatch({ type:'SET_IS_ERROR', payload:true });
      }
    };

  
