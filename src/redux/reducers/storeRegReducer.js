
const regStore = (store= [], action)=>{
    switch (action.type){
        case 'REG_STORE':
            return [...store, action.payload];
        case 'FETCH_ALL':
            return action.payload;
        default:
            return  store 
    }
}

export default regStore