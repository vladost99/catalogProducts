import styled from 'styled-components';


export const CheckoutTitle = styled.h4`
    color: #3a5565;
    font-size: 1.75em;
    margin-bottom: 20px;
`;

export const CheckoutWrap = styled.div`
    display: flex;
    justify-content: space-between;
    background: #fff;
    border-radius: 20px;
    height: 100vh;
    @media (max-width: 640px) {
      flex-direction: column;
      margin-bottom: 100px;
  }
`;

export const CheckoutForm = styled.form`
   /*  height: 100vh; */
`;

export const CheckoutBlockForm = styled.div`
  padding: 15px;
  width: 50%;

  @media (max-width: 640px) {
      width: 100%;
  }
  `;

export const CheckoutName = styled.h5`
    color: #212121;
    font-size: 20px;
    padding: 10px;
`;
export const CheckoutData = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CheckoutInputData = styled.input`
    max-width: 300px;
    height: 40px;
    border-radius: 10px;
    padding: 5px;
    border: 1px solid #291e6a;
    outline: none;
    margin-bottom: 10px;
    margin-left: 20px;

    @media (max-width: 640px) {
        max-width: 460px;
    }
`;

export const CheckoutDelivery  = styled.div`
    display: flex;
    flex-direction: column;
`;


export const CheckoutPay = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    margin-top: 10px;
`;

export const CheckoutFormRadio = styled.div`
    display: flex;
    max-width: 300px;
    align-items: center;
`;

export const CheckoutTotalBlock = styled.div`
    display: flex;
    font-size: 22.001px;
    justify-content: space-around;
    font-weight: 400;
    align-items: center;
`;

export const CheckoutTotalTitle = styled.span``;

export const CheckoutTotalPrice = styled.span``;

export const CheckoutLabel =  styled.label`
    font-weight: 400;
    font-size: 1.3em;
    color: #424242;
`;

export const CheckoutCheck = styled.input`
    margin-left: 15px;
`;


export const CheckoutPaymant = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CheckoutSpan = styled.span`
    font-size: 14px;
    color: #212121;
    font-weight: 600;
    margin-left: 30px;
`;

export const CompositionOrder = styled.div`
    display: flex;
    flex-direction: column;
`;
export const CompositionOrderName = styled.h4`
    margin: 0 0 15px;
    font-size: 1.4em;
    color: #424242;

    @media (max-width: 640px) {
        display: none;
    }
`;

export const CheckoutBtnWrap = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`;

export const CheckoutBtn = styled.button`
    display: flex;
    justify-content: center;
    text-decoration: none;
    align-items: center;
    width: 270px;
    height: 50px;
    border-radius: 50px;
    background: ${({disabled}) => disabled ? '#a7a0ce' : '#291e6a'};
    color: #fff;
    font-size: 22px;
    border: none;
    cursor: pointer;
    outline: none;
    transition: .5s;

    &:hover {
        background: rgba(41,30,106,0.7);
    }
`;

export const ErrorTextCheckout = styled.div`
    color: red;
    font-size: 18px;
`;

export const CartsList = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 640px) {
        display: none;
    }
`;