import React from 'react'
import { Button } from '../Button';
import { AiOutlineMenu } from "react-icons/ai";
import {logout} from '../../Services/firebaseApi';
import {
    Nav,
    NavbarContainer,
    NavItem,
    NavMenu,
    NavLink,
    NavLogo, 
    MenuBar
    } from './NavBarElements';


function Navbar({toggleShow, isLoggin}) {
  


    const button = isLoggin ? <NavLink to="/"><Button onClick={logout}>Выйти</Button></NavLink> : <NavLink to="/signin"><Button>Войти</Button></NavLink>;


    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">I-Catalog</NavLogo>
                <NavMenu>
                    <NavItem>
                        <NavLink to="/">Список товаров</NavLink>
                    </NavItem>
                   {isLoggin && <NavItem>
                        <NavLink to="/newProduct"><Button>Добавить товар</Button></NavLink>
                    </NavItem>}
                    {button}
                </NavMenu>
                <MenuBar onClick={() => toggleShow()}>
                    <AiOutlineMenu style={{cursor: 'pointer'}} color="white" size="2em"/>
                </MenuBar>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar;
