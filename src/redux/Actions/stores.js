import * as api from '../../api';
<<<<<<< HEAD
import ChangeStoreState from '../../component/StoresDisplay/ChangeStoreState';
import{ getLocationInfo } from '../../makaniAPI';


=======
>>>>>>> f40d70612e0c04e8f6aecc719418a89b9f907a80
export const addStore = (store) => async (dispatch) => {
  try {
    const msg = await api.addStore(store);
    dispatch({ type: 'REG_STORE', payload: msg });
  } catch (error) {
    console.log(error);
  }
};


export const filterStores = (keySearch,pageNumber , perPage) => async (dispatch, useState) => {
  try {
    const response = await api.filterStores(keySearch, pageNumber, perPage);
    //console.log(response);
    if(response.status ===200 || response.status ===201) {
      const totalPages =  response.data.total_pages;
      dispatch({ type:'FETCH_STORES' , payload: response.data.markets });
      dispatch({ type:'CHANGE_TOTAL_PAGES' , payload: totalPages===0?1:totalPages });
      dispatch({ type:'CHANGE_PAGE' , payload: pageNumber});
      dispatch({ type:'CHANGE_FILTER_TERM' , payload: keySearch});
    }
  } catch (error) {
    if(error.response.data.status===401 && error.response.data.sub_status===42){
      const newAccessToken = await (await api.refreshAccessToken()).data.access_token;
    
      localStorage.setItem("access_token", newAccessToken);
      filterStores();
  }
  
}
};

export const checkAddress = (address) => async (dispatch) => {
  //console.log(address);
  try {
<<<<<<< HEAD
    const {data} = await getLocationInfo(address);
    console.log(data);

    dispatch({ type: 'ADDRESS', payload: data });
=======
    const {data} = await api.checkAddress(address);
    //console.log(data.place_info);
    if(data.place_info.status === "valid")
    dispatch({ type: 'ADDRESS', payload: data.place_info , isInValid:false });
    else
    {
      dispatch({ type: 'ADDRESS', payload: data.place_info , isInValid:true });
    }
>>>>>>> f40d70612e0c04e8f6aecc719418a89b9f907a80
  } catch (error) {
    console.log(error);
    dispatch({ type: 'INVALID_ADDRESS', payload: true });
  }
};

export const changeState= (storeCode, state) => async (dispatch, useState) => {
  try {
    //console.log('state', storeCode, state)
    await api.ChangeStoreState(storeCode, state);
    const storeList = [...useState().stores.storeList].map(store => store.code ===storeCode? {...store, state:state}: store);
    dispatch({ type:'FETCH_STORES' , payload: storeList });
    //console.log(data)   
  } catch (error) {
    console.log(error);
  }
}; 

export const getStoreInfo = (storeCode) => async (dispatch) => {
  try{
    const {data} = await api.getStore(storeCode);
    //console.log(data.market_info)
    dispatch({type:'SET_STORE_INFO', payload: data.market_info});
  }
  catch(e){
    console.log(e)
  }
}