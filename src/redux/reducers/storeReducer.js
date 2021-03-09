const regStore = (state = { address: {}, storeId: 0, storeInfo: null, isInValid: false, isDone: false, isError: false}, action) => {
    switch (action.type) {
        case 'REG_STORE':
            return { ...state, storeList: action.payload, isDone: action.isDone };
        case 'IS_ERROR':
            return { ...state, isError: action.payload }
        case 'ADDRESS':
            return { ...state, address: action.payload, isInValid: action.isInValid };
        case 'SET_STORE_INFO':
            return { ...state, storeInfo: action.payload };
        case 'INVALID_ADDRESS':
            return { ...state, isInValid: action.payload };
        default:
            return state;
    }
}

export default regStore