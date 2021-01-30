
const regStore = (state=[] , action)=>{
    switch (action.type){
        case 'LOGIN_INFO':
            return [action.payload];
       
    }
}

export default regStore