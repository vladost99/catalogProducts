import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { NavMenuItem,NavMenuLink, NavMenuList, NavMenuWrap, UserBlock, UserMenu } from './NavMenuElements';
import {AiOutlineHome} from 'react-icons/ai';
import {BiUserCircle} from 'react-icons/bi';
import Cart from '../cart/Cart';
import AvatarLogin from '../avatar/Avatar';


function NavMenu({isLoggin,isAdmin,toggleCart}) {
    const [drop, setDrop] = useState(false);
    const handleDrop = () => setDrop(!drop);
    const closeDrop = () => setDrop(false);

    return (
       <NavMenuWrap>
           <NavMenuList>
            <NavMenuItem>
                <Link onClick={closeDrop} to="/" ><AiOutlineHome size="2em" color="#fff" /></Link>
            </NavMenuItem>
            <NavMenuItem onClick={() => {
                toggleCart();
                closeDrop();
                }
                }><Cart/></NavMenuItem>
            <NavMenuItem>
                {
                isLoggin ? <AvatarLogin dropMenu={drop} handleDrop={handleDrop} isAdmin={isAdmin}/>
                 : <UserBlock onClick={handleDrop}>
                     <BiUserCircle size="2em" color="#fff"/>
                     <UserMenu drop={drop}>
                         <NavMenuLink onClick={closeDrop} to="/signin">Авторизация</NavMenuLink>
                         <NavMenuLink onClick={closeDrop} to="/register">Регистрация</NavMenuLink>
                     </UserMenu>
                  </UserBlock>
                 
                }
            </NavMenuItem>
           </NavMenuList>
       </NavMenuWrap>
    )
}

export default NavMenu;
