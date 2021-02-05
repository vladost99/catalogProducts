import React from 'react';
import { CheckoutCheck,CheckoutPay,CheckoutFormRadio, CheckoutData, CheckoutInputData, CheckoutDelivery, CheckoutForm, CheckoutInputCity, CheckoutInputEmail, CheckoutInputName, CheckoutInputPhone, CheckoutName, CheckoutPaymant, CheckoutTitle, CheckoutSpan, CheckoutLabel } from './CheckoutElements';

function Checkout() {
    return (
        <>
         <CheckoutTitle>Оформление заказа</CheckoutTitle>
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
                         <CheckoutLabel>Наложенный платеж</CheckoutLabel>
                         <CheckoutCheck name="checkpay" type="radio" checked/>
                     </CheckoutFormRadio>
                     <CheckoutFormRadio>
                         <CheckoutLabel>Google Pay</CheckoutLabel>
                         <CheckoutCheck name="checkpay" type="radio"/>
                     </CheckoutFormRadio>
                     <CheckoutFormRadio>
                         <CheckoutLabel>Оплата картой на сайте</CheckoutLabel>
                         <CheckoutCheck name="checkpay" type="radio"/>
                     </CheckoutFormRadio>
                 </CheckoutPay>
             </CheckoutPaymant>
         </CheckoutForm>
        </>
    )
}

export default Checkout;
