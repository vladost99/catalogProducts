const initialState = {
    userName: '',
    loading: false,
    isSignIn: false,
    error: '',
    isAdmin: false
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
                ...action.payload,
                loading: false
            }
        case 'AUTHORIZED_FAILURE':
            return {
                ...state,
                isSignIn: false,
                userName: '',
                loading: false,
                error: action.payload,
            }
        case 'CREATE_USER_FAILURE':
            return {
                isSignIn: false,
                userName: '',
                loading: false,
                error: action.payload,
            }    
        case 'DELETE_ERROR':
            return {
                ...state,
                isSignIn: false,
                error: ''
            }    
        case 'NOT_AUTHORIZED':
            return {
                ...state,
                isSignIn: false,
                userName: ''
            }
        case 'USER_CREATE': 
            return {
                ...state,
                loading: false
            }                    
        
        default: 
            return state;
    }
}

export default authReducer;