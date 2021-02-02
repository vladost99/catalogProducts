import styled from 'styled-components';

export const AlertWrap = styled.div`
    width: 500px;
    height: 50px;
    background: rgba(22,164,22,0.87);
    position: fixed;
    z-index: 99;
    bottom: 50px;
    right: 20px;
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;

    @media (max-width: 576px) {
        max-width: 300px;
        min-height: 80px;
    }
`;