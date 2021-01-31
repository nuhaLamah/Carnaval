
const regStore = (store= [], action)=>{
    switch (action.type){
        case 'REG_STORE':
            return [...store, action.payload];
        case 'FETCH_ALL':
            return action.payload;
        case 'FILTER_STORES':
            return action.payload;
        case 'ADDRESS':
            return action.payload;
        default:
            return  store 
    }
}

export default regStore