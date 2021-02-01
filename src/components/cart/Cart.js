import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai";
import { CartBadge, CartWrap} from './CartElements';
import {useSelector} from 'react-redux';
function Cart() {
    let amount = 0;
    const cart = useSelector(({cart}) => cart.cart).forEach(item => {
        amount += item.qtty;
    });
    

    const amountProduct = cart

    return (
        <>
        <CartWrap>
            <AiOutlineShoppingCart size="2em" color="#c3c3c3"/>
            <CartBadge>{amount}</CartBadge>
        </CartWrap>
        </>
    )
}

export default Cart;
