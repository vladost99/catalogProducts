const initialState = {
    userName: '',
    loading: false,
    isSignIn: false,
    errorLogin: false
};  

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'AUTH_LOADING':
            return {
                ...state,
                loading: true,
            }
        case 'AUTHORIZED_SUCCESS':
            return {
                ...state,
                isSignIn: true,
                userName: action.payload,
                loading: false
            }
        case 'AUTHORIZED_FAILURE':
            return {
                ...state,
                isSignIn: false,
                userName: '',
                loading: false,
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
                userName: ''
            }                
        
        default: 
            return state;
    }
}

export default authReducer;