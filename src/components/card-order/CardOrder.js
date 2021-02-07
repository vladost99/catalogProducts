import React from 'react'
import { CardOrderAmout,CardOrderTotal, CardOrderBlockPrice, CardOrderImg, CardOrderInfo, CardOrderName, CardOrderPrice, CardOrderWrap } from './CardOrderElements';

function CardOrder({cart}) {
    return (
     <CardOrderWrap>
         <CardOrderImg src={cart.imageUrl}/>
         <CardOrderInfo>
             <CardOrderName>
                {cart.title}
             </CardOrderName>
             <CardOrderBlockPrice>
                 <CardOrderPrice>{cart.priceWithDiscount}$</CardOrderPrice>
                 <CardOrderAmout>{cart.qtty}шт.</CardOrderAmout>
                 <CardOrderTotal>{cart.totalPriceItem}$</CardOrderTotal>
             </CardOrderBlockPrice>
         </CardOrderInfo>
     </CardOrderWrap>
    )
}

export default CardOrder;
