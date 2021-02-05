import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavMenuWrap = styled.div`
    background: #291e6a;
    width: 100%;
    height: 70px;
    display: none;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    border-radius: 5px;

    @media (max-width: 786px) {
        display: block;
    }

`;


export const NavMenuList = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    height: 100%;
`;

export const UserBlock = styled.div`
    position: relative;
`;

export const UserMenu = styled.div`
    width: 140px;
    height: 110px;
    background: #fff;
     display: ${({drop}) => drop ? 'flex' : 'none'}; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    border-radius: 20px;
    top: -118px;
    right: -50px;
    transition: .5s;
    z-index: 10;

    &::before {
        content: '';
        width: 10px;
        height: 10px;
        position: absolute;
        top: 103px;
        left: 50%;
        background: #fff;
        transform: rotate(45deg);
    }
`;


export const NavMenuItem = styled.li`
    cursor: pointer;
    display: flex;
    justify-content: center;
   

    &::before {
        content: '';
        opacity: 0;
        width: 70px;
        height: 40px;
        position: absolute;
        top: 15px;
        background: rgb(255 255 255 / 30%);
        border-radius: 10px;
        z-index: -1;
        transition: 1s;
    }

    &:hover {
        &::before {
            opacity: 1;
        }
    }
`;

export const NavMenuLink = styled(Link)`
    text-decoration: none;
    display: flex;
    justify-content: center;
    margin-top: 5px;
    align-items: center;
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