import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { AvatarMenu, AvatarLink, AvatarBtn, AvatarWrap} from './AvatarElements';
import {logout} from '../../Services/Firebase/firebaseAuth';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
      cursor: 'pointer'
    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },
  }));

function AvatarLogin({userName}) {
    const classes = useStyles();
    const [dropMenu, setDropMenu] = useState(false);
    const name = userName.substring(0,1).toUpperCase();
    
    const handleDrop = () => {
        setDropMenu(!dropMenu);
    }

    const closeDrop = () => {
        setDropMenu(false);
    }
    const logOut = () => {
        logout();
    }
    return (
        <AvatarWrap>
            <Avatar onClick={handleDrop} className={classes.orange}>{name}</Avatar>
            {dropMenu && ( 
            <AvatarMenu>
                 <AvatarLink to="/newProduct"><AvatarBtn onClick={closeDrop}>Добавить товар</AvatarBtn></AvatarLink>
                 <AvatarLink to="/"><AvatarBtn onClick={logout}>Выйти</AvatarBtn></AvatarLink>
            </AvatarMenu>)
            }
        </AvatarWrap>
    )
}

export default AvatarLogin;
