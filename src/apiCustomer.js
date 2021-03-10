/*
The main file used for Customer API Connection 
*/
import axios from 'axios';

const URL = "https://api.winner2021.ly/api/winners";
const ApiKey = "hL4bA4nB4y93TYu89PVw45LK12fA6";

//----------------------------- Customer ----------------------//
// -------------- Adding new Customer to the system ----------//
export const addCustomer = (newCustomer) => {
   const data = JSON.stringify(newCustomer);
   return axios.post(URL, data, { headers: { 'ApiKey': ApiKey, 'Content-Type': 'application/json' } });
}
