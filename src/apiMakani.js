import axios from "axios";

const API_KEY = '6c4ab7793f8ba95f2587cde26dc426f30e6703fd9a4fedb3a68e5f274b1a90ef';
const URL = 'http://41.242.21.122:666/public/makani';

const config = {headers : {'API-KEY': API_KEY}};

export const getLocationInfo = (location)=>{
   // console.log(URL);
   // console.log(API_KEY);
   // console.log(location);
    return axios.get(`${URL}/placeinformation/${location}`, config);
}