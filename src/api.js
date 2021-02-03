import axios from 'axios';


const URL = 'http://10.40.0.49:5000/api';



export const checkAddress = (address) => axios.get(`${URL}/location_info/${address}`);

export const getStores = () =>{ 

    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        }
      };
    return axios.get(`${URL}/markets`, config, {params: {
        page: 1,
        per_page:5
        }});}

export const filterStores = (term, page, perPage) => axios.get(`${URL}/markets/search`, {params: {
term: term,
page: page,
per_page: perPage
}});


// export const checkAddress = (address) => axios.get(`${URL}/customers/location_info/`,address);
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

export const refreshAccessToken = () => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('refresh_token')}`,
        }
      };
    return axios.get(`${URL}/refresh`, config);
}

export const addCustomer = (newCustomer) => {
    const form_data = new FormData();
    for ( var key in newCustomer ) {
    form_data.append(key, newCustomer[key]);
    } 
    axios.post(`${URL}/customers`, form_data)
}

