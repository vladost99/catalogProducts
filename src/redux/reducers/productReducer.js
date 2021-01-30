const initialState = {
    isLoading: false,
    productItems: []
}

const productReducer = (state = initialState, action) => {
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
        default: 
            return state;
    }
}

export default productReducer;