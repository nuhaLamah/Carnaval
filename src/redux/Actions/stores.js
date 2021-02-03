import * as api from '../../api';



export const addStore = (store) => async (dispatch) => {
  try {
    const msg = await api.addStore(store);

    dispatch({ type: 'REG_STORE', payload: msg });
  } catch (error) {
    console.log(error);
  }
};


export const filterStores = (keySearch, page=1, perPage=10) => async (dispatch) => {
  console.log(keySearch);
  try {
    
    const response = await api.filterStores(keySearch, page, perPage);
    console.log(response);
    if(response.status ===200 || response.status ===201)
    
    dispatch({ type:'FETCH_STORES' , payload: response.data.markets });
    dispatch({ type:'CHANGE_TOTAL_PAGES' , payload: response.data.total_pages});
    dispatch({ type:'CHANGE_PAGE' , payload: page});
    dispatch({ type:'CHANGE_FILTER_TERM' , payload: keySearch});
  } catch (error) {
    if(error.response.data.status===401 && error.response.data.sub_status===42){
      const newAccessToken = await (await api.refreshAccessToken()).data.access_token;
      localStorage.setItem("access_token", newAccessToken);
  }
  filterStores();
}
};


export const checkAddress = (address) => async (dispatch) => {
  try {
    const {data} = await api.checkAddress(address);
    //console.log(data.place_info);
    dispatch({ type: 'ADDRESS', payload: data.place_info });
  } catch (error) {
    console.log(error);
  }
};
