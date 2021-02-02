import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Nav = styled.nav`
    background: #291e6a;
    width: 100%;
    height: 100px;
    position: sticky;
    top: 0;
    z-index: 2;
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    padding: 24px;
    margin: 0 auto;
    width: 100%;
    
`;

export const NavLogo = styled(Link)`
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 30px;
`;

export const NavMenu = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    margin-right: ${({isLoggin}) => isLoggin ? '90px' : '0'};

    @media screen and  (max-width: 786px) {
        display: none;
    }
`;



export const MenuBar = styled.div`
    display: none;

    @media (max-width: 786px) {
        display: block;
    }
`;

export const NavItem = styled.li`
    margin-right: 30px;
`;
export const NavLink = styled(Link)`
    font-size: 22px;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
`;

export const NavLinkAdd = styled(Link)`
    background: #EEC00C;
    font-size: 25px;
    color: #000;
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border: 1px solid #EEC00C;
    padding: 10px;
    cursor: pointer;
    transition: background .5s;

    &:hover {
        background: #EEC00C;
    }
`;

export const CartWrap = styled.div``;

