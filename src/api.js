import axios from 'axios';

const url = 'http://10.40.0.49:5000/api/markets';

export const getStores = () => axios.get(url);

export const filterStores = (keySearch) => axios.get(url,keySearch);

export const addStore = (newStore) => {
    const form_data = new FormData();
    for ( var key in newStore ) {
    form_data.append(key, newStore[key]);
    } 
    axios.post(url, form_data)
}
<<<<<<< HEAD


//----------------------- Customer API -----------//
const urlCustomer = 'http://10.40.0.49:5000/api/customers';
export const addCustomer = (newCustomer) => {
    const form_data = new FormData();
    for ( var key in newCustomer ) {
    form_data.append(key, newCustomer[key]);
    } 
    axios.post(urlCustomer, form_data)
}
=======
>>>>>>> 642009ef510f38b5b9f6dbaab66bb1e80898986a
