
const initialState = {
    cart: []
};


const cartReducer = ( state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART':
            const obj = {...action.payload,qtty: 1};
            const itemInd = state.cart.findIndex(item => item.id === obj.id);
           
           if (itemInd >=0) {
             const  itemInState = state.cart.find(item => item.id === obj.id);
             const newProduct = {
                 ...itemInState,
                 qtty: ++itemInState.qtty
                };

              return {
                ...state, 
                cart: [
                    ...state.cart.slice(0, itemInd),
                    newProduct,
                    ...state.cart.slice(itemInd + 1)
                ]
              } 
                   
             } else {
                return {
                    ...state,
                    cart: [
                        ...state.cart,
                        obj
                    ]
                }
             }
            
        
        
        default:
          return state;
    }
};

export default cartReducer;