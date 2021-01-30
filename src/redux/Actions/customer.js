import * as api from '../../api';
export const addCustomer = (customer) => async (dispatch) => {
    try {
      const msg = await api.addCustomer(customer);
  
      dispatch({ type: 'REG_CUSTOMER', payload: msg });
    } catch (error) {
      console.log(error.message);
    }
  };