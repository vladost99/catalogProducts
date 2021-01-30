import React from 'react';
import { CloseIcon, SidebarContainer, SidebarLink, SidebarMenu, SidebarWrap } from './SideBarElements';
import { AiOutlineClose } from "react-icons/ai";
import {Button} from '../Button';
import {useSelector} from 'react-redux';
import {logout} from '../../Services/Firebase/firebaseAuth';
import {useHistory} from 'react-router-dom';

function Sidebar({isOpen, toggle, isLoggin}) {
   
  
    const button = isLoggin ?  <SidebarLink to="/"><Button onClick={logout}>Выйти</Button></SidebarLink> :  <SidebarLink to="/signin" onClick={toggle}><Button>Войти</Button></SidebarLink>
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <CloseIcon onClick={toggle}>
                <AiOutlineClose color="white"/>
            </CloseIcon>
            <SidebarWrap>
                <SidebarMenu>
                    <SidebarLink to="/" onClick={toggle}>Список товаров</SidebarLink>
                    {isLoggin && <SidebarLink to="/newProduct" onClick={toggle}><Button>Добавить товар</Button></SidebarLink>}
                    {button}
                </SidebarMenu>
            </SidebarWrap>
        </SidebarContainer>
    )
}

export default Sidebar;
