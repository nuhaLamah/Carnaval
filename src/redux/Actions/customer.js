import * as api from '../../api';

export const addCustomer = (customer) => async (dispatch) => {
  console.log(customer);
    try {
      const data   = await api.addCustomer(customer);
      //console.log(data);
      dispatch({ type:'SET_IS_DONE', payload:true });
    } catch (error) {
      console.log(error);
      dispatch({ type:'SET_IS_ERROR', payload:true });
    }
  };

  
