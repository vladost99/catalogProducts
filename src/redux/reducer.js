const initialState = {
    userName: '',
    isLoading: false,
    isSignIn: false,
    errorLogin: false,
    productItems: []
};  

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ITEMS_LOADED': 
            return {
                ...state,
                productItems: action.payload,
                isLoading: false
            }
        case 'LOADING':
            return {
                ...state,
                isLoading: true,
            }
        case 'LOADED':
            return {
                ...state,
                isLoading: false
            }    

        case 'GET_ITEM':
            return {
                ...state,
                productItems: [action.payload]
            }
        case 'AUTHORIZED_SUCCESS':
            return {
                ...state,
                isSignIn: true,
                userName: action.payload,
                isLoading: false
            }
        case 'AUTHORIZED_FAILURE':
            return {
                ...state,
                isSignIn: false,
                userName: '',
                errorLogin: true,
            }
        case 'DELETE_ERROR':
            return {
                ...state,
                isSignIn: false,
                errorLogin: false
            }    
        case 'NOT_AUTHORIZED':
            return {
                ...state,
                isSignIn: false,
                useName: ''
            }                
        
        default: 
            return state;
    }
}

export default reducer;