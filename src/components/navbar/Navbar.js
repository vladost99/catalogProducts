import React,{useState} from 'react'
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
import Cart from '../cart/Cart';

function Navbar({toggleShow, isLoggin,isAdmin,toggleCart}) {
  const [drop, setDrop] = useState(false);
  const handleDrop = () => setDrop(!drop);
  const closeDrop = () => setDrop(false);

    return (
        <Nav>
            <NavbarContainer>
                <NavLogo onClick={closeDrop} to="/">I-Catalog</NavLogo>
                <NavMenu isLoggin={isLoggin}>
                    <NavItem>
                        <NavLink onClick={closeDrop} to="/">Список товаров</NavLink>
                    </NavItem>
                    {!isLoggin && <NavLink to="/signin"><Button>Авторизация</Button></NavLink>}
                    {!isLoggin && <NavLink to="/register"><Button>Регистрация</Button></NavLink>}
                {isLoggin && <AvatarLogin dropMenu={drop} handleDrop={handleDrop} isAdmin={isAdmin}/>}
                 <CartWrap onClick={() => {
                     toggleCart();
                     closeDrop();
                     }}><Cart/></CartWrap>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar;
