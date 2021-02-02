
const initialState = {
    cart: [],
    totalPrice: 0,
    addItem: false,
    itemText: '',
};


const cartReducer = ( state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART':
            const obj = {...action.payload};
            const itemInd = state.cart.findIndex(item => item.id === obj.id);
            const priceDiscount =  Math.round(obj.price - (obj.price*(obj.percent/100)));
           
            if (itemInd >=0) {
             const  itemInState = state.cart.find(item => item.id === obj.id);
             const newProduct = {
                 ...itemInState,
                 qtty: ++itemInState.qtty,
                 priceWithDiscount: priceDiscount
                };
              
                newProduct.totalPriceItem = priceDiscount * itemInState.qtty;

              return {
                ...state, 
                cart: [
                    ...state.cart.slice(0, itemInd),
                    newProduct,
                    ...state.cart.slice(itemInd + 1)
                ],
                totalPrice:  state.totalPrice +  newProduct.priceWithDiscount
              } 
                   
            } else {

                return {
                    ...state,
                    cart: [
                        ...state.cart,
                        {...obj,qtty: 1, totalPriceItem: +priceDiscount,priceWithDiscount: priceDiscount}
                    ],
                    totalPrice: state.totalPrice  + priceDiscount
                }
            }
        case 'MINUS_ITEM_CART': 
        const elem = {...action.payload};
        const ind = state.cart.findIndex(item => item.id === elem.id);

       if (elem.qtty > 1) {
         const priceDiscount =  Math.round(elem.price - (elem.price*(elem.percent/100)));
         const  itemInState = state.cart.find(item => item.id === elem.id);
         const productElem = {
             ...itemInState,
             qtty: --itemInState.qtty,
             priceWithDiscount: priceDiscount
            };
            productElem.totalPriceItem = priceDiscount *itemInState.qtty;
          return {
            ...state, 
            cart: [
                ...state.cart.slice(0, ind),
                productElem,
                ...state.cart.slice(ind + 1)
            ],
            totalPrice: state.totalPrice - priceDiscount

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
                ],
                totalPrice: state.totalPrice - state.cart[itemIndex].totalPriceItem
                
            }
        case 'LOADING_ADD_PRODUCT': {
            return {
                ...state,
                addItem: true,
                itemText: action.payload
            }
        }
        case 'LOADED_PRODUCT_CART': {
            return {
                ...state,
                addItem: false,
                itemText: ''
            }
        }    
        
        
        default:
          return state;
    }
};

export default cartReducer;