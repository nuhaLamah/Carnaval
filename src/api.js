import axios from 'axios';


const URL = 'http://10.40.0.49:5000/api';

export const getStores = (token) =>{ 
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
      }
    return axios.get(`${URL}/markets`, config);}

export const filterStores = (keySearch) => axios.get(`${URL}/makani`,keySearch);

export const checkAddress = (address) => axios.get(`${URL}/customers/location_info/`,address);

export const addStore = (newStore) => {
    const form_data = new FormData();
    for ( var key in newStore ) {
    form_data.append(key, newStore[key]);
    } 
    axios.post(`${URL}/markets`, form_data)
}

//----------------------- User API -----------//
export const log = (logData) =>{
    
    const log_form_data = new FormData();
    for ( var key in logData ) {
    log_form_data.append(key, logData[key]);
    } 
    return axios.post(`${URL}/login`, log_form_data);
}

export const addCustomer = (newCustomer) => {
    const form_data = new FormData();
    for ( var key in newCustomer ) {
    form_data.append(key, newCustomer[key]);
    } 
    axios.post(`${URL}/customers`, form_data)
}

