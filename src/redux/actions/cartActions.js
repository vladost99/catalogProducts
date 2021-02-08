export const addProductCart = (product) => {
    return dispatch => {
        dispatch({type: "LOADING_ADD_PRODUCT", payload: product.title});
        dispatch({
            type: 'ADD_PRODUCT_TO_CART',
            payload: product
        });
        setTimeout(() => dispatch({type: "LOADED_PRODUCT_CART"}), 1000*3);
    }
    
}

export const minusProductCart = (product) => {
    return {
        type: 'MINUS_ITEM_CART',
        payload: product
    }
}

export const removeProductCart = (id) => {
    return {
        type: 'ITEM_REMOVE_FROM_CART',
        payload: id
    }
}

export const buyCompleted = (history) => {
    return dispatch => {
        history.push('/');
        dispatch({type: 'BUY_LOADING', payload: true});
        setTimeout(() => dispatch({type: 'BUY_COMPLETED',payload: false}),1000*3);
    }
}