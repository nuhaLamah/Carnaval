
const regStore = (state=[] , action)=>{
    switch (action.type){
        case 'REG_STORE':
            return [...state, action.payload];
        case 'FETCH_ALL':
            return state = action.payload;
        default:
            return "No Data to Add! "+state
    }
}

export default regStore