import React, {useEffect} from 'react';
import { CloseIcon,AvatarWrap, SidebarContainer, SidebarLink, SidebarMenu, SidebarWrap, SideBarCart } from './SideBarElements';
import { AiOutlineClose } from "react-icons/ai";
import {Button} from '../Button';
import {logout} from '../../Services/Firebase/firebaseAuth';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange} from '@material-ui/core/colors';
import Cart from '../cart/Cart';
const useStyles = makeStyles((theme) => ({
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
      cursor: 'pointer'
    },
  }));

function Sidebar({isOpen, toggle, isLoggin, isAdmin,user,toggleCart}) {
    const button = isLoggin ?  <SidebarLink to="/"><Button onClick={logout}>Выйти</Button></SidebarLink> :  <SidebarLink to="/signin" onClick={toggle}><Button>Авторизация</Button></SidebarLink>
    const classes = useStyles();
    const name = user.substring(0,1).toUpperCase();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = '';
        }
    }, [isOpen]);


    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <CloseIcon onClick={toggle}>
                <AiOutlineClose color="white"/>
            </CloseIcon>
            <SidebarWrap>
                <SidebarMenu>
                   {isAdmin && <AvatarWrap><Avatar className={classes.orange}>{name}</Avatar></AvatarWrap>}
                    <SidebarLink to="/" onClick={toggle}>Список товаров</SidebarLink>
                    <SideBarCart onClick={toggleCart}><Cart/></SideBarCart>
                    {isLoggin && isAdmin && <SidebarLink to="/newProduct" onClick={toggle}><Button>Добавить товар</Button></SidebarLink>}
                    {button}
                   {!isLoggin && <SidebarLink to="/register"><Button>Регистрация</Button></SidebarLink>}
                </SidebarMenu>
            </SidebarWrap>
        </SidebarContainer>
    )
}

export default Sidebar;
