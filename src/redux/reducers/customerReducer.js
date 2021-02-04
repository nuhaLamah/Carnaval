const regCustomer = (customer = {}, action)=>{
    switch (action.type){
        case 'REG_CUSTOMER':
            return action.payload ;

        default:
            return  customer 
    }
}

export default regCustomer