import styled, {keyframes} from 'styled-components';
import {Link} from 'react-router-dom';

export const CardContainer = styled.div`
    position: relative;
    box-shadow:  12px 12px 16px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
    border-bottom: 2px solid #d30909;
    border-radius: 14px;
    margin: 15px; 
    background: #fff;
`;


export const fade = keyframes`
   0% {
    opacity: 0;
   }
   100% {
    opacity: 1;
   }
`;

export const CardIcon = styled.div`
    width: 50px;
    height: 50px;
    background: #291e6a;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin-right: 15px;
`;

export const CardTrashIcon = styled.div`
    cursor: pointer;
    width: 50px;
    height: 50px;
    background: red;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    animation:  0.5s ${fade} ease-in-out;
`;

export const CardEditIcon = styled.div`
    cursor: pointer;
    width: 50px;
    height: 50px;
    background: green;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin-top: 10px;
    animation:  0.5s ${fade} ease-in-out;
`;


export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    align-items: center;
`;

export const CardFooter = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const CardMenuDrop = styled.div`
    position: absolute;
    z-index: 1;
   /*  display:  ${({show}) => show ? 'block' : 'none'}; */
    /* background: #fff; */
   /*  box-shadow: 0 0px 11px rgba(0,0,0,0.7); */
    padding: 10px;
    top: 75px;
    right: 14px;
    border-radius: 15px;
    transition: .5s;
    width: 45px;
    height: 100px; 
    margin-right: 15px;
`;

export const CardMenuItem = styled.div`
    color: #000;
    font-size: 18px;
    transition: background .5s;
    cursor: pointer;

    &:hover {
        background: #c5b9b9;
    }
`;



export const CardImage = styled.img`
    max-width: 100%;
    height: 270px;
    object-fit: cover;
`;

export const CardWrapperImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CardName = styled(Link)`
    padding: 5px;
    text-decoration: none;
    font-size: 20px;
    font-weight: 400;
    height: 88px;
    width: 240px;
    display: flex;
    word-break: break-all;
    align-items: center;
`;

export const CardDescription = styled.p`
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 14px;
    height: 200px;
    padding: 10px;
    word-break: break-all;
`;

export const PriceBlock = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
`;

export const CardPrice = styled.div`
    font-size: ${({discount}) => (discount ? '20px' : '30px')};
    text-decoration: ${({discount}) => (discount ? 'line-through' : 'none')};
    text-align: ${({discount}) => (discount ? 'none' : 'center')};
    /* background: ${({discount}) => (discount ? "none" :"#d57c18")}; */
     width: ${({discount}) => (discount ? '' : '100%')}; 
     margin-left: 12px;
  
`;

export const CardDiscount = styled.div`
    font-size: 30px;
    margin-left: 15px;
    display: flex;
    color: red;
    justify-content: center;
    align-items: center; 

`;




export const CardTimer = styled.span`
    color: #ffb006;
    text-align: center;
    font-size: 30px;
    margin-top: 10px;
`;

export const CardBtnBuy = styled.button`
    width: 210px;
    margin: 10px 0;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    background: #291e6a;
    color: #fff;
    border-radius: 40px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: .5s;
    opacity: 1;

    &:hover {
        opacity: 0.7;
    }
`;

export const CardBtnWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;