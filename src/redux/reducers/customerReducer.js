/* Customer Reducer which contain the basic states used for dealing with customer
isError : used when something wrong happend
isDone : when the customer succseffully add to the Withdraw Customer System
*/
const regCustomer = (customer = {isError: false, isDone: false}, action)=>{
    // Switch case used for dealing with Customer Actions and assign value to each state //
    switch (action.type){
        case 'SET_IS_ERROR':
            return {...customer, isError: action.payload}
            case 'SET_IS_DONE':
                return {...customer, isDone: action.payload}
        default:
            return  customer 
    }
}

export default regCustomer