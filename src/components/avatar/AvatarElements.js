import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const AvatarWrap = styled.div`
    position: relative;
`;

export const AvatarMenu = styled.div`
    width: 140px;
    height: 110px;
    
    background: #fff;
    display: ${({drop}) => drop ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    border-radius: 20px;
    top: 50px;
    right: -50px;
    transition: .5s;
    z-index: 10;

    &::before {
        content: '';
        width: 10px;
        height: 10px;
        position: absolute;
        top: -3px;
        background: #fff;
        transform: rotate(45deg);
    }

    @media (max-width: 786px) {
        top: -118px;

        &::before {
            top: 103px;
        }
    }
`;

export const  AvatarLink = styled(Link)`
    text-decoration: none;
    margin-top: 10px;
    cursor: pointer;

    &:last-child {
        margin-bottom: 10px;
    }
`;

export const AvatarBtn = styled.button`
    color: #000;
    font-size: 14px;
    border: 1px solid #291e6a;
    width: 109px;
    height: 40px;
    border-radius: 10px;
    outline: none;
    background: #fff;
    cursor: pointer;
    transition: .5s;

    &:hover {
        background: #291e6a;
        color: #fff;
    }
`;