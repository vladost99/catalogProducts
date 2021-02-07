import styled from 'styled-components';

export const CardOrderWrap = styled.div`
    display: flex;
    margin-bottom: 10px;
    border-bottom: 1px solid grey;
    padding-bottom: 15px;
`;


export const CardOrderImg = styled.img`
    display: block;
    width: 50px;
    height: 50px;
`;

export const CardOrderInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    max-width: 300px;
    width: 100%;
`;

export const CardOrderName = styled.h5`
    font-size: .75em;
    color: #2196f3;
    max-width: 300px;
`;

export const CardOrderBlockPrice = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 5px;
`;
export const CardOrderPrice = styled.span`
    font-size: .85em;
`;

export const CardOrderAmout = styled.span`
    font-size: .85em;
`;

export const CardOrderTotal = styled.span`
    font-size: .85em;
`;