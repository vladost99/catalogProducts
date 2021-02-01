import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { AvatarMenu, AvatarLink, AvatarBtn, AvatarWrap} from './AvatarElements';
import {logout} from '../../Services/Firebase/firebaseAuth';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
      cursor: 'pointer'
    },
  }));

function AvatarLogin({userName,isAdmin}) {
    const classes = useStyles();
    const [dropMenu, setDropMenu] = useState(false);
    const name = userName.substring(0,1).toUpperCase();

    const handleDrop = () => {
        setDropMenu(!dropMenu);
    }

    const closeDrop = () => {
        setDropMenu(false);
    }
    return (
        <AvatarWrap>
            <Avatar onClick={handleDrop} className={classes.orange}>{name}</Avatar>
              
            <AvatarMenu drop={dropMenu}>
                {isAdmin && <AvatarLink to="/newProduct"><AvatarBtn onClick={closeDrop}>Добавить товар</AvatarBtn></AvatarLink>}
                 <AvatarLink to="/"><AvatarBtn onClick={logout}>Выйти</AvatarBtn></AvatarLink>
            </AvatarMenu>
            
        </AvatarWrap>
    )
}

export default AvatarLogin;
