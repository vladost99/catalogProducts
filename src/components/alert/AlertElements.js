import styled, {keyframes} from 'styled-components';

const anima = keyframes`
    0% {
        right: -100%;
    }
    100% {
        right: 20px;
    }
`;

export const AlertWrap = styled.div`
    max-width: 500px;
    min-height: 80px;
    background: rgba(22,164,22,0.87);
    position: fixed;
    z-index: 1;
    top: 40px;
    right: 20px;
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    animation: ${anima} .5s ease;

    @media (max-width: 576px) {
        max-width: 400px;
    }
`;

export const AlertIcon = styled.div``;

export const AlertText = styled.p`
     font-size: 20px;
     margin-left: 10px;
`;