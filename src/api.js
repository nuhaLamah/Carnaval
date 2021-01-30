import axios from 'axios';

const url = 'http://10.40.0.49:5000/api/markets';

 export const getStores = () => axios.get(url);

export const addStore = (newStore) => {
    const form_data = new FormData();
    for ( var key in newStore ) {
    form_data.append(key, newStore[key]);
    } 
    axios.post(url, form_data)
}
