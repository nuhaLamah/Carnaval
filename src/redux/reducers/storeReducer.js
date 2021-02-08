
const regStore = (state = {storeList: [], address:{}, storeId: 0, pageNumber:1, totalPages:1, filterTerm: '', storeInfo: null}, action)=>{
    switch (action.type){
        case 'REG_STORE':
            return {...state, storeList: action.payload};
        case 'FETCH_STORES':
            return {...state, storeList: action.payload};
        case 'ADDRESS':
            return {...state, address: action.payload};
        case 'CHANGE_PAGE': 
            return {...state, pageNumber: action.payload};
        case 'CHANGE_TOTAL_PAGES':
            return {...state, totalPages: action.payload}; 
        case 'CHANGE_FILTER_TERM':
            return {...state, filterTerm: action.payload};
        case 'SET_STORE_INFO':
            return {...state, storeInfo: action.payload};             
        default:
            return  state 
    }
}

export default regStore