import * as api from '../../apiCustomer';

export const addCustomer = (customer) => async (dispatch) => {
    try {
      const data   = await api.addCustomer(customer);
      if(data.status === 200)
      {
        dispatch({ type:'SET_IS_DONE', payload:true , data:data});
        dispatch({type:'SET_STORE_INFO', payload: null});
        window.location.replace(`/Success`);
      } 
      else
      dispatch({ type:'SET_IS_ERROR', payload:true });
     
    } catch (error) {
      alert("لقد حدث خطأ ! لا يمكنك التسجيل الآن :"+error.message)
      dispatch({ type:'SET_IS_ERROR', payload:true });
    }
  };

  export const clearInfo = () => async (dispatch) => {
      try {
        dispatch({type:'SET_STORE_INFO', payload: null});
        dispatch({type:'SET_IS_DONE', payload: false});
        dispatch({type:'SET_IS_ERROR', payload: false});
        
      } catch (error) {
        dispatch({ type:'SET_IS_ERROR', payload:true });
      }
    };

  
