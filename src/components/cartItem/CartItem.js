import React from 'react'
import {CartImg,
     CartItemImage,
      CartItemInfo,
       CartItemWrapper,
       CartItemName,
       CartPriceBlock,
       CartPriceDiscount,
       CartPrice,
       CartItemDel,
       CartMinusItem,
       CartPlusItem,
       CartBlockAmount,
       CartItemAmount,
       CartItemTotal
    } from './CartItemElements';
import {FaTrash} from "react-icons/fa";
import {FiMinus} from "react-icons/fi";
import {AiOutlinePlus} from  "react-icons/ai";
import {useDispatch} from 'react-redux';
import {removeProductCart, addProductCart, minusProductCart} from '../../redux/actions/cartActions';

function CartItem({cartItem}) {
    const dispatch = useDispatch();

    const deleteItem = () => dispatch(removeProductCart(cartItem.id));
    const plusItem = () => dispatch(addProductCart(cartItem));
    const minusItem = () => dispatch(minusProductCart(cartItem));

    return (
        <CartItemWrapper>
          <CartItemDel onClick={deleteItem}><FaTrash color="#b5b1b1" size="2em"/></CartItemDel>
            <CartItemImage><CartImg src={cartItem.imageUrl} /></CartItemImage>
            <CartItemInfo>
                <CartItemName>{cartItem.title}</CartItemName>
                 <CartPriceBlock>
                    <CartPrice discount={cartItem.isDiscount}>{cartItem.price}$</CartPrice>
                   {cartItem.isDiscount && <CartPriceDiscount>500$</CartPriceDiscount>}
                 </CartPriceBlock>
            </CartItemInfo>
            <CartBlockAmount>
                <CartMinusItem onClick={minusItem}><FiMinus size="2em"/></CartMinusItem>
                <CartItemAmount>{cartItem.qtty}</CartItemAmount>
                <CartPlusItem onClick={plusItem}><AiOutlinePlus size="2em"/></CartPlusItem>
            </CartBlockAmount>
            <CartItemTotal>1999$</CartItemTotal>
        </CartItemWrapper>
    )
}

export default CartItem;
