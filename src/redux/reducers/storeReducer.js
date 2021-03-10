/* Store Reducer which contain the basic states used for dealing with stores
storeList : store data 
isDone : when successfull registered store.
address : object used for checking address validition in makani api.
isInValid : set true when the address is invalid.
pageNumber ,totalPages : used for pagination.
totalStores : the total number of stores registerd in the system.
filterTerm : used for filter store based on theirs name or code number.
storeInfo : fetching the store information form the main api.
isLoading: during the fetching stores process.
acceptedStores: used for counting the number of accepted stores  .
*/
const regStore = (state = {storeList: [], address:{},  pageNumber:1, totalPages:1,acceptedStores: 0, totalStores: 0,filterTerm: '', storeInfo: null, isInValid:false,isDone: false,isError: false, isLoading: false}, action)=>{
     // Switch case used for dealing with Store Actions and assign value to each state //
    switch (action.type){
        case 'REG_STORE':
            return {...state, storeList: action.payload, isDone: action.isDone};
        case 'IS_ERROR':
            return {...state, isError: action.payload}
        case 'FETCH_STORES':
            return {...state, storeList: action.payload};
        case 'ADDRESS':
            return {...state, address: action.payload , isInValid:action.isInValid};
        case 'CHANGE_PAGE': 
            return {...state, pageNumber: action.payload};
        case 'CHANGE_TOTAL_PAGES':
            return {...state, totalPages: action.payload}; 
        case 'CHANGE_TOTAL_STORES':
            return {...state, totalStores: action.payload};       
        case 'CHANGE_FILTER_TERM':
            return {...state, filterTerm: action.payload};
        case 'SET_STORE_INFO':
            return {...state, storeInfo: action.payload};   
        case 'INVALID_ADDRESS':
            return {...state, isInValid: action.payload};  
        case 'SET_IS_LOADING': 
            return {...state, isLoading: action.payload};   
        case 'CHANGE_TOTAL_ACCEPTED_STORES':
                return {...state, acceptedStores: action.payload};
        default:
            return  state 
    }
}

export default regStore