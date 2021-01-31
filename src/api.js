import axios from 'axios';
const urlLog = 'http://10.40.0.49:5000/api/login';
const url = 'http://10.40.0.49:5000/api/markets';
const urlMakani = "http://10.40.0.49:5000/api/location_info/"

export const getStores = () => axios.get(url);

export const filterStores = (keySearch) => axios.get(url,keySearch);

export const checkAddress = (address) => axios.get(`${urlMakani}${address}`);

export const addStore = (newStore) => {
    const form_data = new FormData();
    for ( var key in newStore ) {
    form_data.append(key, newStore[key]);
    } 
    axios.post(url, form_data)
}

//----------------------- User API -----------//
export const log = (logData) =>{
    console.log(urlLog)
    const log_form_data = new FormData();
    for ( var key in logData ) {
    log_form_data.append(key, logData[key]);
    } 
    return axios.post(urlLog, log_form_data);
}

const urlCustomer = 'http://10.40.0.49:5000/api/customers';
export const addCustomer = (newCustomer) => {
    const form_data = new FormData();
    for ( var key in newCustomer ) {
    form_data.append(key, newCustomer[key]);
    } 
    axios.post(urlCustomer, form_data)
}

