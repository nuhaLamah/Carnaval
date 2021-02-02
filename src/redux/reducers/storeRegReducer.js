
const regStore = (state = {storeList: [], address:{}, storeId: 0, page_number:1, total_pages:1}, action)=>{
    switch (action.type){
        case 'REG_STORE':
            return {...state, storeList: action.payload};
        case 'FETCH_ALL':
            return {...state, storeList: action.payload};
        case 'FILTER_STORES':
            return {...state, storeList: action.payload};
        case 'ADDRESS':
            return {...state, address: action.payload};
        case 'CHANGE_PAGE': 
            return {...state, page_number: action.payload};
        case 'CHANGE_TOTAL_PAGES':
            return {...state, total_pages: action.payload};      
        default:
            return  state 
    }
}

export default regStore