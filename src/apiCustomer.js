import axios from 'axios';

const URL = "http://10.20.0.103:81/api/Winners";

 const ApiKey = "hL4bA4nB4y93TYu89PVw45LK12fA6";

//----------------------------- Customer ----------------------//

export const addCustomer = (newCustomer) => {
  
   //console.log(newCustomer);
   const data = JSON.stringify(newCustomer);
  // console.log(data);
   return axios.post(URL, data, {headers : {'ApiKey': ApiKey , 'Content-Type': 'application/json'}})
}

