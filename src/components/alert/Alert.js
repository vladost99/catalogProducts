import React from 'react'
import {AlertIcon, AlertText, AlertWrap} from './AlertElements';
import {AiOutlineCheckCircle}  from "react-icons/ai";
function Alert({text}) {
    return (
        <AlertWrap>
            <AlertIcon><AiOutlineCheckCircle size="2em" style={{color: '#fff'}}/></AlertIcon>
            <AlertText>{text} добавлен в корзину</AlertText>
        </AlertWrap>
    )
}

export default Alert;
