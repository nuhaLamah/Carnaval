import axios from 'axios';
const URL = 'http://10.40.0.49:5000/api';
const url = 'http://10.40.0.49:5000/api/markets';

 export const getStores = () => axios.get(url);

export const addStore = (newStore) => {
    const form_data = new FormData();
    for ( var key in newStore ) {
    form_data.append(key, newStore[key]);
    } 
    axios.post(url, form_data)
}

export const log = (logData) =>{
    const log_form_data = new FormData();
    for ( var key in logData ) {
    log_form_data.append(key, logData[key]);
    } 
    axios.post(`${URL}/login`, log_form_data);
}