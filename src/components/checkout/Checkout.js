import React from 'react';
import CardOrder from '../card-order/CardOrder'; 
import { CheckoutCheck,CheckoutPay,CheckoutFormRadio, CheckoutData, CheckoutInputData, CheckoutDelivery, CheckoutForm, CheckoutInputCity, CheckoutInputEmail, CheckoutInputName, CheckoutInputPhone, CheckoutName, CheckoutPaymant, CheckoutTitle, CheckoutSpan, CheckoutLabel, CheckoutWrap, CompositionOrder, CompositionOrderName, CheckoutTotalBlock, CheckoutTotalPrice,CheckoutTotalTitle,CheckoutBtn, CheckoutBtnWrap, CheckoutBlockForm, ErrorTextCheckout, CartsList } from './CheckoutElements';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { useFormik } from 'formik';
import InputMask from 'react-input-mask';
import {validate} from './validateChema';
import {buyCompleted} from '../../redux/actions/cartActions';


function Checkout() {
    const dispatch = useDispatch();
    const history = useHistory();
     const carts = useSelector(({cart}) => cart.cart).map(item => (
        <CardOrder key={item.id} cart={item}/>
        )); 
     const total = useSelector(({cart}) => cart.totalPrice);
        
     const formik =  useFormik({
            initialValues: {
                firstName: '',
                phone: '',
                email: '',
                city: '',
                department: '',
                typePayment: 'Наложенный платеж'
            },
          validationSchema: validate,  
          onSubmit: values => {
            /* alert(JSON.stringify(values, null, 2)); */
            dispatch(buyCompleted(history));
          }  
     });

    return (
        <>
         <CheckoutTitle>Оформление заказа</CheckoutTitle>
            <CheckoutForm onSubmit={formik.handleSubmit}>
            <CheckoutWrap>
                <CheckoutBlockForm>
                <CheckoutData>
                    <CheckoutName>Ваши данные</CheckoutName>
                    <CheckoutInputData 
                    type="text"
                    placeholder="Имя и фамилия*"
                    name="firstName"
                    id="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    />
                   {formik.touched.firstName && formik.errors.firstName ? <ErrorTextCheckout>{formik.errors.firstName}</ErrorTextCheckout> : null}
                    <InputMask
                    mask="+38 (099) 999-99-99"
                    type="tel"
                    placeholder="Ваш номер телефона*"
                    id="phone"
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    >
                        {(inputProps) => <CheckoutInputData {...inputProps} type="tel"/>}
                    </InputMask>
                     {formik.touched.phone && formik.errors.phone ? <ErrorTextCheckout>{formik.errors.phone}</ErrorTextCheckout> : null}
                    <CheckoutInputData
                    type="email"
                    placeholder="Эл. почта*"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    />
                     {formik.touched.email && formik.errors.email ? <ErrorTextCheckout>{formik.errors.email}</ErrorTextCheckout> : null}
                </CheckoutData>
                <CheckoutDelivery>
                <CheckoutName>Доставка</CheckoutName>
                    <CheckoutInputData
                    placeholder="Введите ваш город*"
                    id="city"
                    name="city"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    />
                     {formik.touched.city && formik.errors.city ? <ErrorTextCheckout>{formik.errors.city}</ErrorTextCheckout> : null}
                    <CheckoutInputData
                     type="number"
                     placeholder="Введите номер отделение новой почты*"
                     id="department"
                     name="department"
                     value={formik.values.department}
                     onChange={formik.handleChange}
                     />
                      {formik.touched.department && formik.errors.department ? <ErrorTextCheckout>{formik.errors.department}</ErrorTextCheckout> : null}
                </CheckoutDelivery>
                <CheckoutPaymant>
                    <CheckoutName>Оплата</CheckoutName>
                    <CheckoutSpan>Способ оплаты</CheckoutSpan>
                    <CheckoutPay>
                        <CheckoutFormRadio>
                            <CheckoutLabel>
                                Наложенный платеж
                                <CheckoutCheck 
                            name="typePayment"
                            type="radio"
                            value="Наложенный платеж"
                            defaultChecked
                            onChange={formik.handleChange}
                            />
                            </CheckoutLabel>
                        </CheckoutFormRadio>
                        <CheckoutFormRadio>
                            <CheckoutLabel>
                            Google Pay
                            <CheckoutCheck
                            name="typePayment"
                            type="radio"
                            value="Google Pay"
                            onChange={formik.handleChange}
                            />
                            </CheckoutLabel>
                        </CheckoutFormRadio>
                        <CheckoutFormRadio>
                            <CheckoutLabel>
                            Оплата картой на сайте
                            <CheckoutCheck
                              name="typePayment"
                              type="radio"
                              value="Оплата картой на сайте"
                              onChange={formik.handleChange}
                              />
                            </CheckoutLabel>
                            {formik.touched.typePayment && formik.errors.typePayment ? <ErrorTextCheckout>{formik.errors.typePayment}</ErrorTextCheckout> : null}
                        </CheckoutFormRadio>
                    </CheckoutPay>
                </CheckoutPaymant>
                </CheckoutBlockForm>
                <CompositionOrder>
                <CompositionOrderName>Состав заказа</CompositionOrderName>
                <CartsList>{carts}</CartsList>
                 <CheckoutTotalBlock>
                      <CheckoutTotalTitle>Итого</CheckoutTotalTitle>
                      <CheckoutTotalPrice>{total}$</CheckoutTotalPrice>
                </CheckoutTotalBlock>
                <CheckoutBtnWrap>
                    <CheckoutBtn disabled={carts.length === 0} type="submit">Подтверджаю заказ</CheckoutBtn>
                </CheckoutBtnWrap>
            </CompositionOrder>
            </CheckoutWrap>
            </CheckoutForm>
         </>
    )
}

export default Checkout;
