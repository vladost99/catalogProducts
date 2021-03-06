import styled, {keyframes} from 'styled-components';
import {Link} from 'react-router-dom';

const anima = keyframes`
    0% {
        top: -100%;
    }
    100% {
        top: 0;
    }
`;

export const CartTableWrap = styled.div`
    width: 100%;
    background: rgba(0,0,0,0.5);
    position: fixed;
    height: 100vh;
    top: 0;
    z-index: 2;
   /*  display: ${({open}) => open ? 'block' : 'none'}; */
`;

export const CartWrapper = styled.div`
    background: #fff;
    width: 80%;
    margin: 0 auto;
    height: 100vh;
    position: relative;
    top: 0;
    animation: ${anima} .5s ease;
    transition: .6s;
    z-index: 2;
    border-radius: 15px;
    overflow-y: scroll;

    @media (max-width: 768px) {
        width: 100%;
        border-radius: 0px;
    }
    
`;



export const CartTableTitle = styled.h3`
    font-size: 35px;
    margin-left: 15px;
    margin-top: 10px;
`;

export const CartTableList = styled.div``;

export const CartTableBtn = styled(Link)`
    display: flex;
    justify-content: center;
    text-decoration: none;
    align-items: center;
    width: 150px;
    height: 50px;
    border-radius: 50px;
    background: #291e6a;
    color: #fff;
    font-size: 22px;
    border: none;
    cursor: pointer;
    outline: none;
`;


export const CartTableClose = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
`;

export const CartBtnWrap = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const CartText = styled.div`
    font-size: 40px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #291e6a;
`;

export const CartTotalPrice = styled.div`
    font-size: 25px;
`;