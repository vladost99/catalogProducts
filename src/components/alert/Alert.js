import React from 'react'
import {AlertWrap} from './AlertElements';
import {AiOutlineCheckCircle}  from "react-icons/ai";
function Alert({text}) {
    return (
        <AlertWrap>
           <AiOutlineCheckCircle size="2em" style={{color: '#fff'}}/>{text} добавлен в корзину
        </AlertWrap>
    )
}

export default Alert;
