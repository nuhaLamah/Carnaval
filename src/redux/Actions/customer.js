import * as api from '../../apiCustomer';

export const addCustomer = (customer) => async (dispatch) => {
    try {
      const data   = await api.addCustomer(customer);
      console.log(data);
      if(data.status === 200)
      {
        dispatch({ type:'SET_IS_DONE', payload:true , data:data});
        dispatch({type:'SET_STORE_INFO', payload: null});
        window.location.replace(`/Success`);
      } 
     
    } catch (error) {
      console.log(error);
      alert("something went wrong!please try again :"+error)
      dispatch({ type:'SET_IS_ERROR', payload:true });
    }
  };

  export const clearInfo = () => async (dispatch) => {
      try {
        dispatch({type:'SET_STORE_INFO', payload: null});
        dispatch({type:'SET_IS_DONE', payload: false});
        dispatch({type:'SET_IS_ERROR', payload: false});
        
      } catch (error) {
        console.log(error);
        dispatch({ type:'SET_IS_ERROR', payload:true });
      }
    };

  
