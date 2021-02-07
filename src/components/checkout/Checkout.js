import React from 'react';
import CardOrder from '../card-order/CardOrder'; 
import { CheckoutCheck,CheckoutPay,CheckoutFormRadio, CheckoutData, CheckoutInputData, CheckoutDelivery, CheckoutForm, CheckoutInputCity, CheckoutInputEmail, CheckoutInputName, CheckoutInputPhone, CheckoutName, CheckoutPaymant, CheckoutTitle, CheckoutSpan, CheckoutLabel, CheckoutWrap, CompositionOrder, CompositionOrderName, CheckoutTotalBlock, CheckoutTotalPrice,CheckoutTotalTitle,CheckoutBtn, CheckoutBtnWrap } from './CheckoutElements';
import {useSelector} from 'react-redux';


function Checkout() {
     const carts = useSelector(({cart}) => cart.cart).map(item => (
        <CardOrder key={item.id} cart={item}/>
        )); 
     const total = useSelector(({cart}) => cart.totalPrice);
    return (
        <>
         <CheckoutTitle>Оформление заказа</CheckoutTitle>
         <CheckoutWrap>
            <CheckoutForm>
                <CheckoutData>
                    <CheckoutName>Ваши данные</CheckoutName>
                    <CheckoutInputData type="text" placeholder="Имя и фамилия*"/>
                    <CheckoutInputData type="phone" placeholder="Ваш номер телефона*"/>
                    <CheckoutInputData type="email"  placeholder="Эл. почта*"/>
                </CheckoutData>
                <CheckoutDelivery>
                <CheckoutName>Доставка</CheckoutName>
                    <CheckoutInputData placeholder="Введите ваш город*"/>
                    <CheckoutInputData placeholder="Введите отделение новой почты*"/>
                </CheckoutDelivery>
                <CheckoutPaymant>
                    <CheckoutName>Оплата</CheckoutName>
                    <CheckoutSpan>Способ оплаты</CheckoutSpan>
                    <CheckoutPay>
                        <CheckoutFormRadio>
                            <CheckoutLabel htmlFor="checkpay1">Наложенный платеж</CheckoutLabel>
                            <CheckoutCheck id="checkpay1" name="checkpay" type="radio" />
                        </CheckoutFormRadio>
                        <CheckoutFormRadio>
                            <CheckoutLabel htmlFor="checkpay2">Google Pay</CheckoutLabel>
                            <CheckoutCheck id="checkpay2" name="checkpay" type="radio"/>
                        </CheckoutFormRadio>
                        <CheckoutFormRadio>
                            <CheckoutLabel htmlFor="checkpay3">Оплата картой на сайте</CheckoutLabel>
                            <CheckoutCheck  id="checkpay3" name="checkpay" type="radio"/>
                        </CheckoutFormRadio>
                    </CheckoutPay>
                </CheckoutPaymant>
            </CheckoutForm>
            <CompositionOrder>
                <CompositionOrderName>Состав заказа</CompositionOrderName>
                 {carts}
                 <CheckoutTotalBlock>
                      <CheckoutTotalTitle>Итого</CheckoutTotalTitle>
                      <CheckoutTotalPrice>{total}$</CheckoutTotalPrice>
                </CheckoutTotalBlock>
                <CheckoutBtnWrap>
                    <CheckoutBtn>Подтверджаю заказ</CheckoutBtn>
                </CheckoutBtnWrap>
            </CompositionOrder>
         </CheckoutWrap>
         </>
    )
}

export default Checkout;
