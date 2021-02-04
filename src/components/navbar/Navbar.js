import React from 'react'
import { Button } from '../Button';
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
                {isLoggin && <AvatarLogin isAdmin={isAdmin}/>}
                 <CartWrap onClick={toggleCart}><Cart/></CartWrap>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar;
