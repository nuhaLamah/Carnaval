import axios from 'axios';

const URL = 'http://10.40.0.49:5000/api';

export const filterStores  = (term, page, perPage) =>{ 
    const config = {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            'Content-Type': "application/json" 
        },
        params: {
            term: term,
            page: page,
            per_page: perPage
            }
      };
    return axios.get(`${URL}/markets/search`, config);}



export const checkAddress = (address) => axios.get(`${URL}/location_info/${address}`);

export const addStore = (newStore) => {
    const form_data = new FormData();
    for ( var key in newStore ) {
    form_data.append(key, newStore[key]);
    } 
    return axios.post(`${URL}/markets`, form_data)
}

//----------------------- User API -----------//
export const log = (logData) =>{
    
    const log_form_data = new FormData();
    for ( var key in logData ) {
    log_form_data.append(key, logData[key]);
    } 
    return axios.post(`${URL}/login`, log_form_data);
}

export const refreshAccessToken = () => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('refresh_token')}`,
        }
      };
    return axios.get(`${URL}/refresh`, config);
}

//----------------------------- Customer ----------------------//
export const addCustomer = (newCustomer) => {
    //console.log(newCustomer);
    const form_data = new FormData();
    for ( var key in newCustomer ) {
    form_data.append(key, newCustomer[key]);
    //console.log(newCustomer[key]);
    //console.log(form_data.append(key, newCustomer[key]));
    } 
    console.log(newCustomer);
   console.log(form_data);
     return axios.post(`${URL}/clients`, form_data)
}

