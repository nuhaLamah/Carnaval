import * as api from '../../api';

export const addCustomer = (customer) => async (dispatch) => {
  console.log(customer);
    try {
      const data   = await api.addCustomer(customer);
      //console.log(data);
      dispatch({ type: 'REG_CUSTOMER', payload:data });
    } catch (error) {
      console.log(error);
    }
  };

  
