import styled from 'styled-components';
import {Link} from 'react-router-dom';
export const CardContainer = styled.div`
    
    position: relative;
    box-shadow: 0 0px 30px rgba(0,0,0,0.7);
    border-bottom: 2px solid #d30909;
    border-radius: 14px;
    margin: 15px; 
    background: #fff;

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
    z-index: 10;
    display:  ${({show}) => show ? 'block' : 'none'};
    background: #fff;
    box-shadow: 0 0px 11px rgba(0,0,0,0.7);
    padding: 10px;
    top: 43px;
    right: 10px;
    border-radius: 15px;
    transition: .5s;
     opacity: ${({show}) => show ? '1' : '0'}; 
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
    font-weight: 700;
    word-break: break-word;
    height: 88px;
    width: 300px;
    display: flex;
    align-items: center;
`;

export const CardDescription = styled.p`
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 14px;
    height: 175px;
    word-break: break-word;
    padding: 10px;
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