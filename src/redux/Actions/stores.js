import * as api from '../../api';

export const getStores = () => async (dispatch) => {
  try {
    const {data} = await api.getStores();
    dispatch({ type: 'FETCH_ALL', payload: data.market_data.markets });
  } catch (error) {
    console.log(error.message);
  }
};


export const addStore = (store) => async (dispatch) => {
  try {
    const msg = await api.addStore(store);

    dispatch({ type: 'REG_STORE', payload: msg });
  } catch (error) {
    console.log(error.message);
  }
};


export const filterStores = (keySearch) => async (dispatch) => {
  console.log(keySearch);
  try {
    const {data} = await api.filterStores(keySearch);
    console.log(data);
    dispatch({ type: 'FILTER_STORES', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const checkAddress = (address) => async (dispatch) => {
  try {
    const {data} = await api.checkAddress(address);
    console.log(data.place_info);
    dispatch({ type: 'ADDRESS', payload: data.place_info });
  } catch (error) {
    console.log(error);
  }
};
