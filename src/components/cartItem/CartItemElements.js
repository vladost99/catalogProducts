import styled from 'styled-components';

export const CartItemWrapper = styled.div`
    display: flex;
    position: relative;
    border-bottom: 1px solid #291e6a;
    border-top: 1px solid #291e6a;
    margin-top: 25px;

    @media (max-width: 576px) {
        flex-direction: column;
    }
`;


export const CartItemImage = styled.div`
    width: 200px;
    height: 150px;
`;
export const CartImg = styled.img`
    width: 100%;
    height: 100%;
`;

export const CartItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 500px;
`;

export const CartItemName = styled.h4`
    font-size: 25px;
   /*  max-width: 300px; */
`;

export const CartPriceBlock = styled.div`
    display: flex;
    margin-top: 30px;
`;

export const CartBlock = styled.div`
    display: flex;
    width: 400px;

    @media (max-width: 576px) {
        width: 100%;
    }

`;

export const CartPrice = styled.span`
    font-size: ${({discount}) => discount ? '20px' : '22px'};
    text-decoration: ${({discount}) => discount ? 'line-through' : 'none'};
    color: ${({discount}) => discount ? 'grey' : '#000'};
`;

export const CartPriceDiscount = styled.span`
    margin-left: 20px;
    font-size: 24px;
    color: red;
`;

export const CartBlockAmount = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 576px) {
        justify-content: flex-start;
    }
`;

export const CartItemAmount = styled.span`
    font-size: 20px;
    width: 40px;
    height: 40px;
    border: 1px solid #291e6a;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const CartMinusItem = styled.span`
   width: 40px;
    height: 40px;
    border: 1px solid #291e6a;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const CartPlusItem = styled.span`
    cursor: pointer;
    width: 40px;
    height: 40px;
    border: 1px solid #291e6a;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const CartItemTotal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    font-size: 30px;
    @media (max-width: 576px) {
        justify-content: flex-end;
        width: 100%;
        margin-right: 15px;
    }
`;

export const CartItemDel = styled.div`
    position: absolute;
    top: 0;
    right: 10px;
    cursor: pointer;
`;

