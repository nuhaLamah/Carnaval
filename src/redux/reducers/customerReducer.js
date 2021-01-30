const regCustomer = (store= [], action)=>{
    switch (action.type){
        case 'REG_CUSTOMER':
            return [...store, action.payload];
        case 'FETCH_ALL':
            return action.payload;

        default:
            return  store 
    }
}

export default regCustomer