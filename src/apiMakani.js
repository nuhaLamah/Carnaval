import axios from "axios";

const API_KEY = '6c4ab7793f8ba95f2587cde26dc426f30e6703fd9a4fedb3a68e5f274b1a90e1';
const URL = 'https://pas.makani-api.com/public/makani';

const config = {headers : {'API-KEY': API_KEY}};

export const getLocationInfo = (location)=>{
   // console.log(URL);
   // console.log(API_KEY);
   // console.log(location);
    return axios.get(`${URL}/placeinformation/${location}`, config);
}