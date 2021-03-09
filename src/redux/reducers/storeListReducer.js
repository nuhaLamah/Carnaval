const StoreListReducer = (state =  {storeList: [],  pageNumber: 1, totalPages: 1, acceptedStores: 0, totalStores: 0, filterTerm: '', isLoading: false } , action) => {
    switch (action.type) {
        case 'FETCH_STORES':
            return { ...state, storeList: action.payload };
        case 'CHANGE_PAGE':
            return { ...state, pageNumber: action.payload };
        case 'CHANGE_TOTAL_PAGES':
            return { ...state, totalPages: action.payload };
        case 'CHANGE_TOTAL_ACCEPTED_STORES':
            return { ...state, acceptedStores: action.payload };
        case 'CHANGE_TOTAL_STORES':
            return { ...state, totalStores: action.payload };
        case 'CHANGE_FILTER_TERM':
            return { ...state, filterTerm: action.payload };
        case 'SET_IS_LOADING':
            return { ...state, isLoading: action.payload };

        default:
            return state
    }
};

export default StoreListReducer;