
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
            /*Нужно фиксить */
        case 'MINUS_ITEM_CART': 
        const elem = {...action.payload};
        const ind = state.cart.findIndex(item => item.id === elem.id);
       
       if (elem.qtty > 1) {
         const  itemInState = state.cart.find(item => item.id === elem.id);
         const productElem = {
             ...itemInState,
             qtty: --itemInState.qtty
            };

          return {
            ...state, 
            cart: [
                ...state.cart.slice(0, ind),
                productElem,
                ...state.cart.slice(ind + 1)
            ]
          } 
               
        } else {
            return {
                ...state
            }
        } 
            
                
        case 'ITEM_REMOVE_FROM_CART':
            const idx = action.payload;
            const itemIndex = state.cart.findIndex(item => item.id === idx);
            return {
                ...state, 
                cart: [
                    ...state.cart.slice(0, itemIndex),
                    ...state.cart.slice(itemIndex + 1)
                ]
            }
        
        
        default:
          return state;
    }
};

export default cartReducer;