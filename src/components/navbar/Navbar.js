import React from 'react'
import { Button } from '../Button';
import { AiOutlineMenu } from "react-icons/ai";
import {
    Nav,
    NavbarContainer,
    NavItem,
    NavMenu,
    NavLink,
    NavLogo, 
    MenuBar,
    CartWrap
    } from './NavBarElements';
import AvatarLogin from '../avatar/Avatar';
import {useSelector} from 'react-redux';
import Cart from '../cart/Cart';

function Navbar({toggleShow, isLoggin,isAdmin,toggleCart}) {
  
const userName = useSelector(({auth}) => auth.userName);

    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">I-Catalog</NavLogo>
                <NavMenu isLoggin={isLoggin}>
                    <NavItem>
                        <NavLink to="/">Список товаров</NavLink>
                    </NavItem>
                    {!isLoggin && <NavLink to="/signin"><Button>Авторизация</Button></NavLink>}
                    {!isLoggin && <NavLink to="/register"><Button>Регистрация</Button></NavLink>}
                {isLoggin && <AvatarLogin isAdmin={isAdmin} userName={userName}/>}
                 <CartWrap onClick={toggleCart}><Cart/></CartWrap>
                </NavMenu>
                <MenuBar onClick={() => toggleShow()}>
                    <AiOutlineMenu style={{cursor: 'pointer'}} color="white" size="2em"/>
                </MenuBar>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar;
