import * as api from '../../api';

export const login = () => async (dispatch) => {
  try {
    const {data} = await api.getStores();
    dispatch({ type: 'FETCH_ALL', payload: data.markets });
  } catch (error) {
    console.log(error.message);
  }
};