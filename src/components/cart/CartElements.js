import styled from 'styled-components';


export const CartWrap = styled.div`
    position: relative;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const CartBadge = styled.div`
    position: absolute;
    top: 5px;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    width: 25px;
    height: 25px;
    border-radius: 40px;
    font-size: 16px;
    background: #b5162d;
`;