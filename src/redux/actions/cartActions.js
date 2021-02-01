export const addProductCart = (product) => {
    return {
        type: 'ADD_PRODUCT_TO_CART',
        payload: product
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