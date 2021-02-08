import styled, {keyframes} from 'styled-components';

export const anima = keyframes`
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
`;

export const ModalWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    z-index: 99;
`;


export const Modal = styled.div`
    width: 400px;
    height: 200px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${anima} .5s ease;
`;

export const ModalText = styled.h4`
    color: green;
    font-size: 20px;
`;

export const ModalIcon = styled.div`
    color: green;
    margin-right: 10px;
    font-size: 2em;
    width: 40px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
