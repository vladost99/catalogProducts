import React, {useEffect} from 'react'
import CartItem from '../cartItem/CartItem'
import { CartBtnWrap, CartTableBtn, CartTableClose, CartTableList, CartTableTitle, CartTableWrap, CartText, CartWrapper } from './CartTableElements'
import {useSelector} from 'react-redux';
import {AiOutlineClose} from 'react-icons/ai';

function CartTable({open,close}) {

    const cartItems = useSelector(({cart}) => cart.cart);
    const total = useSelector(({cart}) => cart.totalPrice);
    const items = cartItems.map((item,ind) => (
        <CartItem key={ind} cartItem={item}/>
    ));


    useEffect(() => {
        if (open) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = '';
        }
    }, [open]); 

    return (
        <CartTableWrap open={open}>
           <CartWrapper>
           <CartTableClose onClick={close}><AiOutlineClose size="2em"/></CartTableClose>
            <CartTableTitle>Корзина</CartTableTitle>
                <CartTableList>
                    {items}
                    { items == 0 ? <CartText>Корзина пуста</CartText> : ''}
                </CartTableList>
                {'Итого' && total}
               {items != 0 ? <CartBtnWrap><CartTableBtn>Оформить</CartTableBtn></CartBtnWrap> : ''}
           </CartWrapper>
        </CartTableWrap>
    )
}

export default CartTable
