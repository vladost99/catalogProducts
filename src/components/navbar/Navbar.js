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
    MenuBar
    } from './NavBarElements';
import AvatarLogin from '../avatar/Avatar';
import {useSelector} from 'react-redux';

function Navbar({toggleShow, isLoggin}) {
  
const userName = useSelector(({auth}) => auth.userName);

    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">I-Catalog</NavLogo>
                <NavMenu>
                    <NavItem>
                        <NavLink to="/">Список товаров</NavLink>
                    </NavItem>
                   {/* {isLoggin && <NavItem>
                        <NavLink to="/newProduct"><Button>Добавить товар</Button></NavLink>
                    </NavItem>} */}
                    {!isLoggin && <NavLink to="/signin"><Button>Войти</Button></NavLink>}
                    {!isLoggin && <NavLink to="/register"><Button>Зареєструватися</Button></NavLink>}
                {isLoggin && <AvatarLogin userName={userName}/>}
                </NavMenu>
                <MenuBar onClick={() => toggleShow()}>
                    <AiOutlineMenu style={{cursor: 'pointer'}} color="white" size="2em"/>
                </MenuBar>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar;
